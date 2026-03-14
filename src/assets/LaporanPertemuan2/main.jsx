import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Custom.css' 
import Container from './Container.jsx'
import BiodataDiri from './BiodataDiri.jsx'

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