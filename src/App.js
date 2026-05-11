import { useState } from 'react';
import { generatePalette } from './utils/generatePalette';
import ColorInput from './components/ColorInput';
import PaletteRow from './components/PaletteRow';
import ExportPanel from './components/ExportPanel';

const DEFAULT_COLOR = '#3b82f6';

export default function App() {
  const [baseColor, setBaseColor] = useState(DEFAULT_COLOR);
  const palette = generatePalette(baseColor);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Colour Palette</h1>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Base colour
            </label>
            <ColorInput color={baseColor} onChange={setBaseColor} />
          </div>

          <PaletteRow palette={palette} />
          <ExportPanel palette={palette} />
        </div>
      </div>
    </div>
  );
}
