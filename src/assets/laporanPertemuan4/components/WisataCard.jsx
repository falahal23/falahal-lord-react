import data from "../data/wisata.json";
import "../formWisata.css";

export default function WisataCard() {
  return (
    <div className="container">

      {/* ✅ GRID TARUH DI SINI */}
      <div className="grid-card">

        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}  
            />

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-sub">{item.location}</p>

              <p className="card-desc">{item.details.description}</p>

              <div className="mt-2">
                {item.facilities.map((f, i) => (
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