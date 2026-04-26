import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'
import App from './infra/App.jsx'
import Ejemplos from './infra/Ejemplos.jsx'
import Fundamentos from './infra/Fundamentos.jsx'

function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <NavLink to="/" end className="nav-link">
          Formulario
        </NavLink>
        <NavLink to="/ejemplos" className="nav-link">
          Ejemplos
        </NavLink>
        <NavLink to="/fundamentos" className="nav-link">
          Fundamentos
        </NavLink>
      </nav>
    </header>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplos" element={<Ejemplos />} />
        <Route path="/fundamentos" element={<Fundamentos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
