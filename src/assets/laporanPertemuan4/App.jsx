import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import WisataCard from "./components/WisataCard";
import WisataTable from "./components/WisataTable";
import WisataSearch from "./components/WisataSearch";
import "./formWisata.css";

export default function App() {
  return (
    <BrowserRouter>

      {/* MENU NAVIGASI */}
      <div style={{
        padding: "20px",
        background: "var(--surface)",
        borderBottom: "1px solid var(--border-color)",
        marginBottom: "20px"
      }}>
        <Link to="/guest" style={{
          color: "var(--primary)",
          textDecoration: "none",
          marginRight: "20px",
          fontWeight: "600"
        }}>🏖️ Guest View</Link>
        <Link to="/admin" style={{
          color: "var(--primary)",
          textDecoration: "none",
          fontWeight: "600"
        }}>📊 Admin View</Link>
      </div>

      <Routes>
        {/* Guest */}
        <Route path="/guest" element={
          <>
            <WisataSearch />
            <WisataCard />
          </>
        } />

        {/* Admin */}
        <Route path="/admin" element={<WisataTable />} />

      </Routes>
    </BrowserRouter>
  );
}