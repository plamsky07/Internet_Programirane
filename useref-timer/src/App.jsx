import React, { useState, useRef, useEffect } from "react";
import "./index.css";

function TimerApp() {
  const [time, setTime] = useState(0); // текущо време
  const intervalRef = useRef(null); // пазим ID на интервала

  // ✅ Старт
  const startTimer = () => {
    // ако вече има интервал — не правим нов
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  // ✅ Пауза
  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // ✅ Нулиране
  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  };

  // 🔥 cleanup при unmount (професионално изпълнение)
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <h1>Таймер: {time} сек</h1>

      <div className="buttons">
        <button onClick={startTimer}>Старт</button>
        <button onClick={pauseTimer}>Пауза</button>
        <button onClick={resetTimer}>Нулиране</button>
      </div>
    </div>
  );
}

export default TimerApp;