import chroma from 'chroma-js';

export const HARMONY_MODES = {
  complementary: { label: 'Complementary', offsets: [180] },
  triadic: { label: 'Triadic', offsets: [120, 240] },
  'split-complementary': { label: 'Split-comp.', offsets: [150, 210] },
  analogous: { label: 'Analogous', offsets: [30, 60] },
};

function rotateHue(hex, degrees) {
  const [h, s, l] = chroma(hex).hsl();
  return chroma.hsl((h + degrees) % 360, s, l).hex();
}

export function getHarmonyColors(hex, mode) {
  return HARMONY_MODES[mode].offsets.map(offset => rotateHue(hex, offset));
}
