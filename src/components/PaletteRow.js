import SwatchCard from './SwatchCard';
import { SHADES } from '../utils/generatePalette';

export default function PaletteRow({ palette }) {
  if (!palette) return null;

  return (
    <div className="grid grid-cols-11 gap-3">
      {SHADES.map(shade => (
        <SwatchCard key={shade} shade={shade} hex={palette[shade]} />
      ))}
    </div>
  );
}
