import { fontFamilyBase } from 'scss/utils/exports';

// Note: this configuration should match scss core typography config
const baseTypography = () => ({
  fontFamily: fontFamilyBase,
  h1: {
    lineHeight: '1',
    fontWeight: '300',
    letterSpacing: '-1.6px',
  },
  h2: {
    lineHeight: '1.1',
    fontWeight: '300',
    letterSpacing: '-.8px',
  },
  h3: {
    lineHeight: '1.2',
    fontWeight: '400',
    letterSpacing: '0',
  },
  h4: {
    lineHeight: '1.3',
    fontWeight: '400',
    letterSpacing: '.3px',
  },
  h5: {
    lineHeight: '1.4',
    fontWeight: '500',
    letterSpacing: '1px',
  },
  h6: {
    lineHeight: '1.5',
    fontWeight: '500',
    letterSpacing: '1.7px',
  },
});

export default { baseTypography };
