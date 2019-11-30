/** Make each prop in object an integer */
export const entriesToInts = (o) => {
  Object.entries(o).reduce((a, [k, v]) => ({
    ...a,
    [k]: parseInt(v, 10),
  }), {});
};

export default {
  entriesToInts,
};
