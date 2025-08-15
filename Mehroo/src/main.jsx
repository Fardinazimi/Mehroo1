import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/CSS/style.css'
import './assets/CSS/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Components/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero />
    <Home />
  </StrictMode>,
)
