import { useMemo, useState } from "react";
import type { ReactElement } from "react";

const clamp = (n: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, n));

const AdvancedCounter = (): ReactElement => {
  const MIN = -50;
  const MAX = 50;

  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const canInc = count < MAX;
  const canDec = count > MIN;

  const status = useMemo((): string => {
    if (count === 0) return "Неутрален режим 😇";
    if (count > 0) return "Плюс настроение ✅";
    return "Минус настроение ⚠️";
  }, [count]);

  const change = (delta: number): void => {
    setCount((prev) => clamp(prev + delta, MIN, MAX));
  };

  const reset = (): void => setCount(0);

  return (
    <div className="component-card">
      <div className="card-head">
        <h2>Усъвършенстван брояч</h2>
        <span className="badge">{status}</span>
      </div>

      <p className="count-display">Брояч: {count}</p>

      <div className="field">
        <label>Стъпка</label>
        <input
          type="number"
          min={1}
          max={20}
          value={step}
          onChange={(e) => {
            const v = Number(e.target.value);
            setStep(clamp(Number.isFinite(v) ? v : 1, 1, 20));
          }}
        />
      </div>

      <div className="button-group">
        <button onClick={() => change(step)} disabled={!canInc}>
          +{step}
        </button>
        <button onClick={() => change(-step)} disabled={!canDec}>
          -{step}
        </button>
        <button onClick={() => change(5)} disabled={!canInc}>
          +5
        </button>
        <button onClick={() => change(-5)} disabled={!canDec}>
          -5
        </button>
        <button onClick={reset} className="reset-btn">
          Нулиране
        </button>
      </div>

      <p className="hint">
        Лимити: {MIN} … {MAX}
      </p>
    </div>
  );
};

export default AdvancedCounter;
