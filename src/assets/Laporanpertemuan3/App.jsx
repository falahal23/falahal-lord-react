import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormKaryawan from "./Pages/FormKaryawan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormKaryawan />} />
      </Routes>
    </BrowserRouter>
  );
}