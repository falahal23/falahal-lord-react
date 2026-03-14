import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Hapus atau beri komentar pada index.css jika file tidak ada di folder src
// import './index.css' 

// 2. Pastikan path ini benar (Perhatikan huruf besar/kecil!)
import './assets/LaporanPertemuan2/Custom.css' 
import Container from './assets/LaporanPertemuan2/Container.jsx'
import BiodataDiri from './assets/LaporanPertemuan2/biodataDiri.jsx'
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Container>
        <BiodataDiri />
      </Container>
    </StrictMode>
  )
} else {
  console.error("Elemen root tidak ditemukan! Pastikan ada <div id='root'></div> di index.html");
}