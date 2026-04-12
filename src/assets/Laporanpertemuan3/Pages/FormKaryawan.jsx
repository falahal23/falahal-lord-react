import { useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import "../FormKaryawantailwind.css";


export default function FormKaryawan() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let err = {};

    if (!nama) err.nama = "Nama wajib diisi";

    if (!email) err.email = "Email wajib diisi";
    else if (!email.includes("@")) err.email = "Email tidak valid";

    if (!password) err.password = "Password wajib diisi";
    else if (password.length < 6)
      err.password = "Password minimal 6 karakter";

    if (!role) err.role = "Pilih role";
    if (!level) err.level = "Pilih level";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">

      {/* CARD */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl w-100 border border-slate-700">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">
          IT Employee Registration
        </h2>

        {/* FORM GRID */}
        <div className="grid gap-3">

          <InputField
            label="Nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            error={errors.nama}
          />

          <InputField
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <SelectField
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={["Frontend", "Backend", "UI/UX"]}
            error={errors.role}
          />

          <SelectField
            label="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            options={["Manager", "Junior", "Senior"]}
            error={errors.level}
          />

        </div>

        {/* BUTTON (FIX) */}
        <button
          onClick={handleSubmit}
          className="btn mt-4"
        >
          Register
        </button>

        {/* RESULT */}
        {submitted && (
          <div className="mt-4 p-4 bg-green-500/10 border-l-4 border-green-400 rounded-lg shadow-md">
            <p className="font-semibold">Nama: {nama}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <p>Level: {level}</p>
          </div>
        )}
      </div>
    </div>
  );
}