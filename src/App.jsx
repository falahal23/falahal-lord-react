import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pertemuan2 from "./assets/LaporanPertemuan2/Container"; 
import Pertemuan3 from "./assets/Laporanpertemuan3/Pages/FormKaryawan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pertemuan2" element={<Pertemuan2 />} />
        <Route path="/pertemuan3" element={<Pertemuan3 />} />
      </Routes>
    </BrowserRouter>
  );
}