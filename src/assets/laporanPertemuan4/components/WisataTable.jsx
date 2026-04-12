import { useState } from "react";
import data from "../data/wisata.json";
import "../formWisata.css";

export default function WisataTable() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories
  const categories = [...new Set(data.map(item => item.details.category))];

  // Filter data based on search and category
  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                         item.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.details.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      {/* SEARCH AND FILTER CONTROLS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "16px",
        marginBottom: "24px",
        alignItems: "center"
      }}>
        <input
          type="text"
          placeholder="Cari berdasarkan nama atau lokasi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select"
        >
          <option value="">Semua Kategori</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* RESULTS INFO */}
      <div className="results-info">
        Menampilkan {filteredData.length} dari {data.length} destinasi
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Lokasi</th>
            <th>Harga</th>
            <th>Rating</th>
            <th>Kategori</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>Rp {item.price.toLocaleString()}</td>
                <td>{item.rating}</td>
                <td>{item.details.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{
                textAlign: "center",
                padding: "40px",
                color: "var(--text-muted)",
                fontStyle: "italic"
              }}>
                Tidak ada data yang sesuai dengan pencarian
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}