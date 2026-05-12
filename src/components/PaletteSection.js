import PaletteRow from './PaletteRow';

export default function PaletteSection({ label, hex, palette }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-5 h-5 rounded-full shadow-sm flex-shrink-0"
          style={{ backgroundColor: hex }}
        />
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <span className="text-sm font-mono text-gray-400 uppercase">{hex}</span>
      </div>
      <PaletteRow palette={palette} />
    </div>
  );
}
