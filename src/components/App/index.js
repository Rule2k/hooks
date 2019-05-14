import React, { useState } from 'react';
import './app.scss';

export default function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div id="app">
      <p>{clicks}</p>
      <button
        type="button"
        onClick={() => {
          setClicks(...clicks, +1);
        }}
      >
        Cliquez-moi !
      </button>
    </div>
  );
}
