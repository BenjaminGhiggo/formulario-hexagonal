import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'
import App from './infra/App.jsx'
import Ejemplos from './infra/Ejemplos.jsx'
import Fundamentos from './infra/Fundamentos.jsx'
import Patrones from './infra/Patrones.jsx'
import Solid from './infra/Solid.jsx'
import Estructuras from './infra/Estructuras.jsx'
import Algoritmos from './infra/Algoritmos.jsx'
import Poo from './infra/Poo.jsx'
import Sql from './infra/Sql.jsx'
import Testing from './infra/Testing.jsx'

const pages = [
  { path: '/', label: 'Hexagonal' },
  { path: '/ejemplos', label: 'Ejemplos' },
  { path: '/fundamentos', label: 'Fundamentos' },
  { path: '/poo', label: 'POO' },
  { path: '/solid', label: 'SOLID' },
  { path: '/patrones', label: 'Patrones' },
  { path: '/estructuras', label: 'Estructuras' },
  { path: '/algoritmos', label: 'Algoritmos' },
  { path: '/sql', label: 'SQL' },
  { path: '/testing', label: 'Testing' },
]

function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        {pages.map((p) => (
          <NavLink
            key={p.path}
            to={p.path}
            end={p.path === '/'}
            className="nav-link"
          >
            {p.label}
          </NavLink>
        ))}
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
        <Route path="/poo" element={<Poo />} />
        <Route path="/solid" element={<Solid />} />
        <Route path="/patrones" element={<Patrones />} />
        <Route path="/estructuras" element={<Estructuras />} />
        <Route path="/algoritmos" element={<Algoritmos />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
