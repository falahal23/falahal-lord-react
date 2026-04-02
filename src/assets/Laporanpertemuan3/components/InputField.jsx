export default function InputField({
  label,
  type,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-3">
      <label className="block font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}