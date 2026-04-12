import { createRoot } from "react-dom/client";

function Test() {
  return (
    <div style={{ padding: "20px", background: "lightblue", color: "black" }}>
      <h1>Test Pertemuan 3</h1>
      <p>Jika ini muncul, React berfungsi dengan baik!</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Test />);