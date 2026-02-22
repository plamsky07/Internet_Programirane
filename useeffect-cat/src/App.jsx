import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCat = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      setCatUrl(data[0].url);
    } catch {
      setError("Грешка при зареждане на котката 😿");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="bg">
      <div className="card">
        <h1>Random Cat 🐱</h1>

        {loading && <p>Зареждане...</p>}
        {error && <p className="error">{error}</p>}

        {catUrl && !loading && (
          <img src={catUrl} alt="cat" className="img" />
        )}

        <button onClick={fetchCat} disabled={loading}>
          Нова котка
        </button>
      </div>
    </div>
  );
}