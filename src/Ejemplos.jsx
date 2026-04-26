import { useState } from 'react'
import { LANGS, LANG_LABELS } from './sections'
import { HighlightedCode } from './highlight'
import { examples1 } from './examples-1'
import { examples2 } from './examples-2'
import { examples3 } from './examples-3'
import './Ejemplos.css'

const allExamples = [...examples1, ...examples2, ...examples3]

const sectionNumbers = [...new Set(allExamples.map((e) => e.section))]

function ExampleCard({ ex, lang }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="ej-card">
      <div className="ej-enunciado" onClick={() => setOpen(!open)}>
        <span className="ej-badge">{ex.id}</span>
        <span className="ej-enunciado-text">{ex.enunciado}</span>
        <span className={`ej-toggle ${open ? 'open' : ''}`}>&#9654;</span>
      </div>
      {open && (
        <div className="ej-solucion">
          <div className="ej-solucion-label">
            Solucion en {LANG_LABELS[lang]}
          </div>
          <HighlightedCode code={ex.code[lang]} lang={lang} />
          <div className="ej-output-label">Salida</div>
          <div className="ej-output">
            {ex.output.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SectionGroup({ sectionNum, examples, lang }) {
  const title = examples[0].sectionTitle

  return (
    <div className="ej-section" id={`ej-section-${sectionNum}`}>
      <div className="ej-section-header">
        <span className="ej-section-num">{sectionNum}</span>
        <span className="ej-section-title">{title}</span>
      </div>
      {examples.map((ex) => (
        <ExampleCard key={ex.id} ex={ex} lang={lang} />
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

function EjSidebar({ onNavigate, lang, onLangChange }) {
  return (
    <nav className="ej-sidebar">
      <div className="sidebar-title">Secciones</div>
      <LangSelector lang={lang} onChange={onLangChange} />
      <ul className="sidebar-list">
        {sectionNumbers.map((num) => {
          const title = allExamples.find((e) => e.section === num).sectionTitle
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

export default function Ejemplos() {
  const [lang, setLang] = useState('php')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleNavigate = (num) => {
    const el = document.getElementById(`ej-section-${num}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
        <EjSidebar
          onNavigate={handleNavigate}
          lang={lang}
          onLangChange={setLang}
        />
      )}
      <div className="app">
        <h1 className="app-title">Ejemplos Practicos</h1>
        <p className="app-subtitle">
          3 ejercicios por concepto — enunciado y solucion paso a paso
        </p>
        {sectionNumbers.map((num) => (
          <SectionGroup
            key={num}
            sectionNum={num}
            examples={allExamples.filter((e) => e.section === num)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  )
}
