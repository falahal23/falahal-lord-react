import { useState } from "react";
import data from "../data/wisata.json";
import "../formWisata.css";

export default function WisataSearch() {
  const [form, setForm] = useState({
    search: "",
    category: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const filtered = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(form.search.toLowerCase()) &&
      (form.category ? item.details.category === form.category : true) &&
      (form.location ? item.location === form.location : true)
    );
  });

  const categories = [...new Set(data.map(i => i.details.category))];
  const locations = [...new Set(data.map(i => i.location))];

  return (
    <div className="container">

      {/* SEARCH */}
      <input
        type="text"
        name="search"
        placeholder="Cari destinasi wisata..."
        onChange={handleChange}
        className="input"
        style={{ marginBottom: "20px" }}
      />

      {/* FILTER */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
        <select name="category" onChange={handleChange} className="select">
          <option value="">Semua Kategori</option>
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>

        <select name="location" onChange={handleChange} className="select">
          <option value="">Semua Lokasi</option>
          {locations.map((l, i) => (
            <option key={i}>{l}</option>
          ))}
        </select>
      </div>

      {/* RESULT */}
      <div className="grid-card">
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-sub">{item.location}</p>

              <p className="card-desc">{item.details.description}</p>

              <div className="mt-2">
                {item.facilities.slice(0, 2).map((f, i) => (
                  <span key={i} className="tag">
                    {f}
                  </span>
                ))}
              </div>

              <p className="price">
                Rp {item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}