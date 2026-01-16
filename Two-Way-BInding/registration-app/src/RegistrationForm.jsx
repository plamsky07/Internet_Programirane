import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="registration-form">
        <h2>Регистрация</h2>

        <div className="form-group">
          <label htmlFor="name">Име</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Въведете вашето име"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Имейл</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Въведете имейл"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Парола</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Въведете парола"
          />
        </div>

        <button type="button" onClick={handleClear} className="clear-btn">
          Изчисти
        </button>
      </form>

      <div className="output">
        <p><strong>Въведено име:</strong> {name || "-"}</p>
        <p><strong>Въведен имейл:</strong> {email || "-"}</p>
        <p><strong>Въведена парола:</strong> {password || "-"}</p>
      </div>
    </>
  );
};

export default RegistrationForm;
