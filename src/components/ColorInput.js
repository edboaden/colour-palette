import { useState, useEffect } from 'react';

const HEX_REGEX = /^#[0-9a-f]{6}$/i;

export default function ColorInput({ color, onChange }) {
  const [draft, setDraft] = useState(color);

  useEffect(() => {
    setDraft(color);
  }, [color]);

  function commit(value) {
    const trimmed = value.startsWith('#') ? value : `#${value}`;
    if (HEX_REGEX.test(trimmed)) {
      onChange(trimmed.toLowerCase());
    } else {
      setDraft(color);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <input
          type="color"
          value={color}
          onChange={e => onChange(e.target.value)}
          className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-200 p-0.5 bg-white"
        />
      </div>
      <input
        type="text"
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={e => commit(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && commit(e.target.value)}
        spellCheck={false}
        className="w-36 px-3 py-2.5 font-mono text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 uppercase tracking-widest"
        placeholder="#3b82f6"
        maxLength={7}
      />
    </div>
  );
}
