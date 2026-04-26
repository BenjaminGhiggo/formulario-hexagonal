import { useState } from 'react'
import { LANGS, LANG_LABELS } from '../domain/sections'
import { HighlightedCode } from './highlight'

function getOutput(item, lang) {
  if (typeof item.output === 'string') return item.output
  return item.output[lang] || item.output.javascript
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

function ItemCard({ item, lang, hasBad }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fd-card">
      <div className="fd-enunciado" onClick={() => setOpen(!open)}>
        <span className="fd-badge">{item.id}</span>
        <span className="fd-title-text">
          {item.title}
          {item.description && (
            <span style={{ color: '#8b949e', fontSize: '0.75rem' }}>
              {' '} — {item.description}
            </span>
          )}
        </span>
        <span className={`fd-toggle ${open ? 'open' : ''}`}>&#9654;</span>
      </div>
      {open && (
        <div className="fd-solucion">
          {hasBad && item.codeBad && (
            <>
              <div className="fd-label" style={{ color: '#f85149' }}>
                Mal (antes)
              </div>
              <HighlightedCode code={item.codeBad[lang]} lang={lang} />
              <div className="fd-label" style={{ color: '#f85149' }}>
                Salida mal
              </div>
              <div className="fd-output" style={{ borderColor: '#f85149', color: '#f85149' }}>
                {(typeof item.outputBad === 'string' ? item.outputBad : (item.outputBad[lang] || item.outputBad.javascript))
                  .split('\n').map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <div className="fd-label" style={{ color: '#3fb950', marginTop: '0.75rem' }}>
                Bien (despues)
              </div>
            </>
          )}
          {!hasBad && <div className="fd-label">Codigo {LANG_LABELS[lang]}</div>}
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

function CategoryGroup({ catNum, items, lang, hasBad }) {
  const title = items[0].categoryTitle
  return (
    <div className="fd-category" id={`pg-cat-${catNum}`}>
      <div className="fd-cat-header">
        <span className="fd-cat-num">{catNum}</span>
        <span className="fd-cat-title">{title}</span>
      </div>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} lang={lang} hasBad={hasBad} />
      ))}
    </div>
  )
}

function PageSidebar({ categories, allItems, onNavigate, lang, onLangChange, sqlMode }) {
  return (
    <nav className="fd-sidebar">
      <div className="sidebar-title">Categorias</div>
      {!sqlMode && <LangSelector lang={lang} onChange={onLangChange} />}
      <ul className="sidebar-list">
        {categories.map((num) => {
          const title = allItems.find((i) => i.category === num).categoryTitle
          return (
            <li key={num} className="sidebar-item" onClick={() => onNavigate(num)}>
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

export default function PageTemplate({ title, subtitle, items, hasBad, sqlMode }) {
  const [lang, setLang] = useState('php')
  const [sidebarOpen, setSidebarOpen] = useState(() => !isMobile())
  const categories = [...new Set(items.map((i) => i.category))]

  const handleNavigate = (num) => {
    const el = document.getElementById(`pg-cat-${num}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (isMobile()) setSidebarOpen(false)
  }

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <button className="sidebar-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '\u2039' : '\u203A'}
      </button>
      {sidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
          <PageSidebar
            categories={categories}
            allItems={items}
            onNavigate={handleNavigate}
            lang={lang}
            onLangChange={setLang}
            sqlMode={sqlMode}
          />
        </>
      )}
      <div className="app">
        <h1 className="app-title">{title}</h1>
        <p className="app-subtitle">{subtitle}</p>
        {categories.map((num) => (
          <CategoryGroup
            key={num}
            catNum={num}
            items={items.filter((i) => i.category === num)}
            lang={lang}
            hasBad={hasBad}
          />
        ))}
      </div>
    </div>
  )
}
