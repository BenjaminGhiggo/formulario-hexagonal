import { useState } from 'react'
import { LANGS, LANG_LABELS } from '../domain/sections'
import { HighlightedCode } from './highlight'
import { fundamentos1 } from '../domain/fundamentos-1'
import { fundamentos2 } from '../domain/fundamentos-2'
import { fundamentos3 } from '../domain/fundamentos-3'
import './Fundamentos.css'

const allItems = [...fundamentos1, ...fundamentos2, ...fundamentos3]
const categories = [...new Set(allItems.map((i) => i.category))]

function getOutput(item, lang) {
  if (typeof item.output === 'string') return item.output
  return item.output[lang] || item.output.javascript
}

function ItemCard({ item, lang }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fd-card">
      <div className="fd-enunciado" onClick={() => setOpen(!open)}>
        <span className="fd-badge">{item.id}</span>
        <span className="fd-title-text">{item.title}</span>
        <span className={`fd-toggle ${open ? 'open' : ''}`}>&#9654;</span>
      </div>
      {open && (
        <div className="fd-solucion">
          <div className="fd-label">Codigo {LANG_LABELS[lang]}</div>
          <HighlightedCode code={item.code[lang]} lang={lang} />
          <div className="fd-label">Salida</div>
          <div className="fd-output">
            {getOutput(item, lang).split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function CategoryGroup({ catNum, items, lang }) {
  const title = items[0].categoryTitle

  return (
    <div className="fd-category" id={`fd-cat-${catNum}`}>
      <div className="fd-cat-header">
        <span className="fd-cat-num">{catNum}</span>
        <span className="fd-cat-title">{title}</span>
      </div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} lang={lang} />
      ))}
    </div>
  )
}

function LangSelector({ lang, onChange }) {
  return (
    <div className="lang-selector">
      <div className="lang-selector-label">Lenguaje</div>
      <div className="lang-options">
        {LANGS.map((l) => (
          <button
            key={l}
            className={`lang-btn ${lang === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
          >
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>
    </div>
  )
}

function FdSidebar({ onNavigate, lang, onLangChange }) {
  return (
    <nav className="fd-sidebar">
      <div className="sidebar-title">Categorias</div>
      <LangSelector lang={lang} onChange={onLangChange} />
      <ul className="sidebar-list">
        {categories.map((num) => {
          const title = allItems.find((i) => i.category === num).categoryTitle
          return (
            <li
              key={num}
              className="sidebar-item"
              onClick={() => onNavigate(num)}
            >
              <span className="sidebar-num">{num}</span>
              <span className="sidebar-text">{title}</span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function isMobile() {
  return window.innerWidth <= 768
}

export default function Fundamentos() {
  const [lang, setLang] = useState('php')
  const [sidebarOpen, setSidebarOpen] = useState(() => !isMobile())

  const handleNavigate = (num) => {
    const el = document.getElementById(`fd-cat-${num}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (isMobile()) setSidebarOpen(false)
  }

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '\u2039' : '\u203A'}
      </button>
      {sidebarOpen && (
        <>
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
          <FdSidebar
            onNavigate={handleNavigate}
            lang={lang}
            onLangChange={setLang}
          />
        </>
      )}
      <div className="app">
        <h1 className="app-title">Fundamentos de Programacion</h1>
        <p className="app-subtitle">
          75 temas esenciales en 18 categorias — cada uno en 6 lenguajes
        </p>
        {categories.map((num) => (
          <CategoryGroup
            key={num}
            catNum={num}
            items={allItems.filter((i) => i.category === num)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  )
}
