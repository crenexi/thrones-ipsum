import sassVars from 'scss/utils/exports';

const baseBreakpoints = () => {
  const shorten = (key) => key.split('breakpoint').pop().toLowerCase();
  const isBreakpointKey = ([key]) => key.includes('breakpoint');
  const withShortKey = ([key, val]) => [shorten(key), val];

  const bpEntries = Object.entries(sassVars)
    .filter(isBreakpointKey)
    .map(withShortKey);

  const entriesToTheme = (bps, [size, bp], index) => {
    bps.keys[index] = size;
    bps.values[size] = parseInt(bp, 10);
    return bps;
  };

  return bpEntries.reduce(entriesToTheme, {
    keys: '',
    values: ''
  });
}

export default { baseBreakpoints };
