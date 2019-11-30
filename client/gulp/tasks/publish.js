const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const AWS = require('aws-sdk');
const config = require('../config');
const logger = require('../logger');

/** Publish build to production bucket */
function publishProd() {
  return publish('prod');
}

/** Publishes */
function publish(buildConfiguration, done) {
  const awsConfig = getAwsConfig(buildConfiguration);

  // Ensure aws config exists
  if (awsConfig === null) {
    logger.error(`Failed to publish ${buildConfiguration}`);
    done();
  }

  // Create publisher with S3 options
  const publisher = awspublish.create(awsConfig);
  const { appPublicGlob, appBuildGlob } = config;

  return gulp
    .src([appPublicGlob, appBuildGlob])
    .pipe(publisher.publish(config.awsS3.headers))
    .pipe(publisher.sync())
    .pipe(
      awspublish.reporter({
        states: ['create', 'update', 'delete', 'cache', 'skip'],
      })
    );
}

/** Returns aws configuration object to use for awspublish.create */
function getAwsConfig(buildConfiguration) {
  // Note if we're publishing to staging or production
  const bucketName =
    buildConfiguration === 'prod'
      ? config.awsS3.buckets.prod
      : config.awsS3.buckets.stage;

  // Verify bucket name exists
  if (!verifyBucketName(bucketName)) {
    return null;
  }

  return {
    region: config.awsS3.region,
    params: {
      Bucket: bucketName,
    },
    credentials: new AWS.SharedIniFileCredentials({
      profile: config.awsS3.profile,
    }),
    httpOptions: {
      timeout: 300000, // five minutes
    },
  };
}

/** Simply verifies that a bucket name is provided */
function verifyBucketName(bucketName) {
  if (typeof bucketName !== 'string' || !bucketName) {
    logger.error('Attempted to publish without specifying bucket name!');
    return false;
  }

  // Activity log
  logger.message(`Publishing build to ${bucketName} S3 bucket`, 'blue.bold');
  return true;
}

exports.publishProd = publishProd;
