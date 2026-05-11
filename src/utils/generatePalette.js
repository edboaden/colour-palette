import chroma from 'chroma-js';

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Map shade number to a 0–1 position on a white→color→black scale
const SHADE_POSITIONS = {
  50:  0.05,
  100: 0.10,
  200: 0.20,
  300: 0.30,
  400: 0.40,
  500: 0.50,
  600: 0.60,
  700: 0.70,
  800: 0.80,
  900: 0.90,
  950: 0.95,
};

export function generatePalette(hex) {
  try {
    const color = chroma(hex);
    const scale = chroma.scale(['white', color, 'black']).mode('lab');
    return Object.fromEntries(
      SHADES.map(shade => [shade, scale(SHADE_POSITIONS[shade]).hex()])
    );
  } catch {
    return null;
  }
}

export { SHADES };
