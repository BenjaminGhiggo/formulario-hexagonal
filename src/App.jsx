import { useState, useRef, useEffect } from 'react'
import { sections, LANGS, LANG_LABELS } from './sections'
import { HighlightedCode, HighlightedFormula } from './highlight'
import './App.css'

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

function Sidebar({ activeId, onNavigate, lang, onLangChange }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-title">Indice</div>
      <LangSelector lang={lang} onChange={onLangChange} />
      <ul className="sidebar-list">
        {sections.map((s) => (
          <li
            key={s.num}
            className={`sidebar-item ${activeId === s.num ? 'active' : ''}`}
            onClick={() => onNavigate(s.num)}
          >
            <span className="sidebar-num">{s.num}</span>
            <span className="sidebar-text">{s.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Section({ data, sectionRef, lang }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="section" id={`section-${data.num}`} ref={sectionRef}>
      <div className="section-header" onClick={() => setOpen(!open)}>
        <div className="section-number">{data.num}</div>
        <div className="section-title">{data.title}</div>
        <span className="section-lang-badge">{LANG_LABELS[lang]}</span>
        <div className={`section-toggle ${open ? 'open' : ''}`}>&#9654;</div>
      </div>
      {open && (
        <div className="section-body">
          <div className="formula-label">Formula</div>
          <div className="formula"><HighlightedFormula text={data.formula} /></div>
          <div className="meaning">
            <span>Donde:</span> {data.meaning}
          </div>
          <div className="formula-label">Codigo {LANG_LABELS[lang]}</div>
          <HighlightedCode code={data.code[lang]} lang={lang} />
          <div className="output-label">Salida</div>
          <div className="output">
            {data.output.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeId, setActiveId] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [lang, setLang] = useState('php')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const num = Number(entry.target.id.replace('section-', ''))
            setActiveId(num)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (num) => {
    const el = sectionRefs.current[num]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title={sidebarOpen ? 'Cerrar indice' : 'Abrir indice'}
      >
        {sidebarOpen ? '\u2039' : '\u203A'}
      </button>
      {sidebarOpen && (
        <Sidebar
          activeId={activeId}
          onNavigate={handleNavigate}
          lang={lang}
          onLangChange={setLang}
        />
      )}
      <div className="app">
        <h1 className="app-title">Formulario de Requisitos para Arquitectura Hexagonal</h1>
        <p className="app-subtitle">
          Estilo academico con significado de cada variable algebraica
        </p>
        {sections.map((s) => (
          <Section
            key={s.num}
            data={s}
            lang={lang}
            sectionRef={(el) => (sectionRefs.current[s.num] = el)}
          />
        ))}
        <div className="footer">
          FORMULARIO COMPLETO: CADA VARIABLE TIENE SU SIGNIFICADO
        </div>
      </div>
    </div>
  )
}

export default App
