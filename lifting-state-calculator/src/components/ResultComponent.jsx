export default function ResultComponent({ result, error }) {
  return (
    <div className="card">
      <h3>Резултат</h3>

      {error ? (
        <p className="error">{error}</p>
      ) : result === null ? (
        <p className="hint">Въведи две числа, за да се изчисли резултатът.</p>
      ) : (
        <p className="result">{result}</p>
      )}
    </div>
  );
}