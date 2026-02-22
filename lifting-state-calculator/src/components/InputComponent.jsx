export default function InputComponent({
  a,
  b,
  op,
  onChangeA,
  onChangeB,
  onChangeOp,
}) {
  return (
    <div className="card">
      <label className="field">
        Първо число
        <input
          type="number"
          value={a}
          onChange={(e) => onChangeA(e.target.value)}
          placeholder="напр. 5"
        />
      </label>

      <label className="field">
        Второ число
        <input
          type="number"
          value={b}
          onChange={(e) => onChangeB(e.target.value)}
          placeholder="напр. 5"
        />
      </label>

      <label className="field">
        Операция
        <select value={op} onChange={(e) => onChangeOp(e.target.value)}>
          <option value="+">+ (събиране)</option>
          <option value="-">- (изваждане)</option>
          <option value="*">* (умножение)</option>
          <option value="/">/ (деление)</option>
        </select>
      </label>
    </div>
  );
}