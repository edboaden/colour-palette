import { HARMONY_MODES } from '../utils/getHarmonyColors';

export default function HarmonySelector({ mode, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(HARMONY_MODES).map(([key, { label }]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            mode === key
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
