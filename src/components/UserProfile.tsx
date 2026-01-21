import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Иван");
  const [age, setAge] = useState(25);

  const inc = () => setAge((a) => a + 1);
  const dec = () => setAge((a) => Math.max(0, a - 1));
  const reset = () => {
    setName("Иван");
    setAge(25);
  };

  return (
    <div className="component-card">
      <div className="card-head">
        <h2>Потребителски профил</h2>
        <span className="badge">{age >= 18 ? "18+ ✅" : "Under 18 👶"}</span>
      </div>

      <p>Име: <b>{name || "—"}</b></p>
      <p>Години: <b>{age}</b></p>

      <div className="button-group">
        <button onClick={inc}>Увеличи възрастта</button>
        <button onClick={dec} disabled={age === 0}>Намали възрастта</button>
        <button onClick={reset} className="ghost-btn">Reset</button>
      </div>

      <div className="field">
        <label>Промени името</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Напиши име..."
          maxLength={20}
        />
      </div>
    </div>
  );
};

export default UserProfile;
