import { useState } from 'react';
import { SHADES } from '../utils/generatePalette';

function toPrefix(label) {
  return label.toLowerCase().replace(/\s+/g, '-');
}

export default function ExportPanel({ palettes }) {
  const [copied, setCopied] = useState(false);

  if (!palettes || palettes.length === 0) return null;

  const blocks = palettes.map(({ label, palette }) => {
    const prefix = toPrefix(label);
    const vars = SHADES.map(shade => `  --${prefix}-${shade}: ${palette[shade]};`).join('\n');
    return `  /* ${label} */\n${vars}`;
  });

  const output = `:root {\n${blocks.join('\n\n')}\n}`;

  function handleCopy() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          CSS Variables
        </h2>
        <button
          onClick={handleCopy}
          className="text-sm px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          {copied ? 'Copied!' : 'Copy all'}
        </button>
      </div>
      <pre className="bg-gray-950 text-gray-100 text-sm font-mono p-5 rounded-xl overflow-x-auto leading-relaxed">
        {output}
      </pre>
    </div>
  );
}
