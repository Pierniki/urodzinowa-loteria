export const shuffle = <T>(array: T[], seed: string) => {
  const mulberry32 = (a: number) => {
    a ^= a >>> 16;
    a = (a * 0x85ebca6b) & 0xffffffff;
    a ^= a >>> 13;
    a = (a * 0xc2b2ae35) & 0xffffffff;
    a ^= a >>> 16;
    return (a >>> 0) / 0xffffffff;
  };

  const generateSeeds = (seed: string, length: number): number[] => {
    let seeds: number[] = [];
    let tseed = seed;
    while (length) {
      length--;
      let prn = mulberry32(parseInt(tseed, 10));
      seeds[length] = prn;
      tseed = prn.toString().substring(2, prn.toString().length);
    }
    return seeds;
  };

  const seeds = generateSeeds(seed, array.length);
  return array
    .map((value, index) => ({ value, sort: seeds[index] }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
};
