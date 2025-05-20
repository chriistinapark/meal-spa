import { useState } from 'react';

export default function Search({ cb }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      cb(value);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
      />
      <button className="btn btn-outline-secondary" onClick={() => cb(value)}>
        🔍
      </button>
    </div>
  );
}
