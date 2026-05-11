import { useState } from 'react';

export default function SwatchCard({ shade, hex }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <button
      onClick={handleCopy}
      title={`Copy ${hex}`}
      className="flex flex-col items-center gap-2 group focus:outline-none"
    >
      <div
        className="w-full aspect-square rounded-xl shadow-sm transition-transform group-hover:scale-105 group-focus:scale-105"
        style={{ backgroundColor: hex }}
      />
      <div className="text-center">
        <div className="text-xs font-semibold text-gray-700">{shade}</div>
        <div className="text-xs font-mono text-gray-500 uppercase">
          {copied ? 'Copied!' : hex}
        </div>
      </div>
    </button>
  );
}
