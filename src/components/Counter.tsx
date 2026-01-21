import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);
  const inc2 = () => setCount((c) => c + 2);
  const reset = () => setCount(0);

  return (
    <div className="component-card">
      <div className="card-head">
        <h2>Основен брояч</h2>
        <span className="badge">Simple</span>
      </div>

      <p>Бутонът е натиснат <b>{count}</b> пъти</p>

      <div className="button-group">
        <button onClick={inc} onDoubleClick={inc2} title="Двоен клик = +2">
          Натисни ме
        </button>
        <button onClick={reset} className="ghost-btn">Reset</button>
      </div>

      <p className="hint">Tip: двоен клик = +2 😄</p>
    </div>
  );
};

export default Counter;
