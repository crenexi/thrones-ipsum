module.exports = {
  appPublicGlob: '../public/**',
  appBuildGlob: './dist/**',
  awsS3: {
    region: 'us-west-1',
    buckets: {
      prod: 'thronesipsum.com',
    },
    profile: 's3-deploy',
    headers: {
      'Cache-Control': 'max-age=0, no-transform, public',
    },
  },
};
