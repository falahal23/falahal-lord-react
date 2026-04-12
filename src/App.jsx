import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pertemuan2 from "./assets/LaporanPertemuan2/Container"; 
import Pertemuan3 from "./assets/Laporanpertemuan3/Pages/FormKaryawan";

// ✅ PERBAIKAN DI SINI (HURUF BESAR KECIL HARUS SAMA)
import WisataCard from "./assets/laporanPertemuan4/components/WisataCard";
import WisataTable from "./assets/laporanPertemuan4/components/WisataTable";
import WisataSearch from "./assets/laporanPertemuan4/components/WisataSearch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/pertemuan2" element={<Pertemuan2 />} />
        <Route path="/pertemuan3" element={<Pertemuan3 />} />
        <Route
          path="/pertemuan4"
          element={
            <>
              <WisataCard />
              <WisataTable />
              <WisataSearch />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}