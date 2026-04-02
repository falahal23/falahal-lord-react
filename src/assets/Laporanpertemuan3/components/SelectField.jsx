import "../FormKaryawantailwind.css";

export default function SelectField({
  label,
  value,
  onChange,
  options,
  error,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select
        value={value}
        onChange={onChange}
        className={error ? "input error-border" : "input"}
      >
        <option value="">-- Pilih --</option>

        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}