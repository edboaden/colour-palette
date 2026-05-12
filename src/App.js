import { useState } from 'react';
import { generatePalette } from './utils/generatePalette';
import { getHarmonyColors } from './utils/getHarmonyColors';
import ColorInput from './components/ColorInput';
import HarmonySelector from './components/HarmonySelector';
import PaletteSection from './components/PaletteSection';
import ExportPanel from './components/ExportPanel';

const PALETTE_NAMES = ['Primary', 'Secondary', 'Tertiary'];

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}

export default function App() {
  const [baseColor, setBaseColor] = useState(randomHex);
  const [harmonyMode, setHarmonyMode] = useState('complementary');

  const companionHexes = getHarmonyColors(baseColor, harmonyMode);
  const allHexes = [baseColor, ...companionHexes];

  const palettes = allHexes.map((hex, i) => ({
    label: PALETTE_NAMES[i],
    hex,
    palette: generatePalette(hex),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Colour Palette</h1>
          <div className="flex flex-wrap items-end gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Base colour
              </label>
              <ColorInput color={baseColor} onChange={setBaseColor} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Harmony
              </label>
              <HarmonySelector mode={harmonyMode} onChange={setHarmonyMode} />
            </div>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-10">
          {palettes.map(({ label, hex, palette }) => (
            <PaletteSection key={label} label={label} hex={hex} palette={palette} />
          ))}

          <ExportPanel palettes={palettes} />
        </div>
      </div>
    </div>
  );
}
