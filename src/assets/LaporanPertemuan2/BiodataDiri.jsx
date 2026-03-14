// Child Komponen 1: Foto / Avatar
function Avatar() {
  return (
    <div className="avatar">
      <img src="/img/Profil/saya.jpeg" alt="Avatar" />
    </div>
  );
}

// Child Komponen 2: Header Nama
function NameHeader({ nama, peran, nim }) {
  return (
    <div className="header">
      <h2>{nama}</h2>
      <p className="role">{peran}</p>
      <p className="nim">NIM: {nim}</p>
    </div>
  );
}

// Child Komponen 3: Deskripsi
function AboutMe() {
  return (
    <div className="section">
      <h3>Tentang Saya</h3>
      <p>
        Saya adalah mahasiswa Sistem Informasi yang tertarik pada pengembangan
        web modern, khususnya React.js, UI Design, dan pengembangan aplikasi
        berbasis web.
      </p>
    </div>
  );
}

// Child Komponen 4: Kontak
function ContactInfo({ email, github }) {
  return (
    <div className="section">
      <h3>Kontak</h3>
      <p>📧 {email}</p>
      <p>💻 {github}</p>
    </div>
  );
}

// Child Komponen 5: Skill
function Skills() {
  const listSkill = ["React", "JavaScript", "HTML", "CSS", "Git"];

  return (
    <div className="section">
      <h3>Keahlian</h3>
      <ul className="skill-list">
        {listSkill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// Child Komponen 6: Footer
function PortfolioFooter() {
  return (
    <div className="footer">
      <small>
        © {new Date().getFullYear()} | Portfolio Mahasiswa Sistem Informasi
      </small>
    </div>
  );
}

// Parent Component
export default function BiodataDiri() {
  const dataKontak = {
    email: "falahal24si@smahasiswa.pcr.ac.id",
    github: "github.com/falahal23"
  };

  return (
    <div className="card">
      <Avatar />
      <NameHeader
        nama="Falahal Nabil Haqiqi"
        peran="Frontend Developer"
        nim="123456"
      />
      <AboutMe />
      <ContactInfo {...dataKontak} />
      <Skills />
      <PortfolioFooter />
    </div>
  );
}