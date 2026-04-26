/**
 * Syntax highlighter ligero sin dependencias.
 * Tokeniza código por regex según el lenguaje y devuelve <span> coloreados.
 */

const RULES = {
  php: [
    { re: /(\/\/.*|#.*)/g, cls: 'hl-cmt' },
    { re: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, cls: 'hl-str' },
    { re: /\b(class|interface|implements|function|public|private|protected|static|new|return|echo|int|string|void|bool|array|object)\b/g, cls: 'hl-kw' },
    { re: /(\$\w+)/g, cls: 'hl-var' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
    { re: /\b([A-Z]\w*)\b/g, cls: 'hl-type' },
    { re: /\b(get_class|stdClass)\b/g, cls: 'hl-fn' },
  ],
  python: [
    { re: /(#.*)/g, cls: 'hl-cmt' },
    { re: /("""[\s\S]*?"""|'''[\s\S]*?'''|f"(?:\\.|[^"\\])*"|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, cls: 'hl-str' },
    { re: /\b(class|def|return|from|import|self|print|if|else|and|or|not|None|True|False|is)\b/g, cls: 'hl-kw' },
    { re: /(@\w+)/g, cls: 'hl-dec' },
    { re: /\b(int|str|bool|object|ABC|abstractmethod)\b/g, cls: 'hl-type' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
  ],
  javascript: [
    { re: /(\/\/.*)/g, cls: 'hl-cmt' },
    { re: /(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, cls: 'hl-str' },
    { re: /\b(class|constructor|function|return|const|let|var|new|this|typeof|console|extends|implements)\b/g, cls: 'hl-kw' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
    { re: /\b([A-Z]\w*)\b/g, cls: 'hl-type' },
    { re: /\.(log|m|f|ejec|otro|ejecutar|hacer|put|get|equals|op|algo|setReturn)\b/g, cls: 'hl-fn', keep: '.' },
  ],
  typescript: [
    { re: /(\/\/.*)/g, cls: 'hl-cmt' },
    { re: /(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, cls: 'hl-str' },
    { re: /\b(class|interface|implements|constructor|function|return|const|let|new|this|typeof|console|extends|export|private|public|readonly)\b/g, cls: 'hl-kw' },
    { re: /\b(number|string|boolean|void|object|Record)\b/g, cls: 'hl-type' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
    { re: /\b([A-Z]\w*)\b/g, cls: 'hl-type' },
  ],
  java: [
    { re: /(\/\/.*)/g, cls: 'hl-cmt' },
    { re: /("(?:\\.|[^"\\])*")/g, cls: 'hl-str' },
    { re: /\b(class|interface|implements|extends|public|private|protected|static|final|return|new|void|import|package)\b/g, cls: 'hl-kw' },
    { re: /\b(int|String|boolean|Object|Map|HashMap|Integer)\b/g, cls: 'hl-type' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
    { re: /\b([A-Z]\w*)\b/g, cls: 'hl-type' },
    { re: /\b(System\.out\.println)\b/g, cls: 'hl-fn' },
  ],
  csharp: [
    { re: /(\/\/.*)/g, cls: 'hl-cmt' },
    { re: /(\$"(?:\\.|[^"\\])*"|"(?:\\.|[^"\\])*")/g, cls: 'hl-str' },
    { re: /\b(class|interface|record|struct|public|private|protected|static|readonly|return|new|var|using|namespace|override|virtual|abstract)\b/g, cls: 'hl-kw' },
    { re: /\b(int|string|bool|void|object|Dictionary|Console)\b/g, cls: 'hl-type' },
    { re: /\b(\d+)\b/g, cls: 'hl-num' },
    { re: /\b([A-Z]\w*)\b/g, cls: 'hl-type' },
    { re: /=>/g, cls: 'hl-kw' },
  ],
}

/**
 * Tokeniza el código fuente en fragmentos con clase CSS.
 * Estrategia: recorrer reglas en orden de prioridad, marcar rangos ya coloreados.
 */
function tokenize(code, lang) {
  const rules = RULES[lang] || RULES.javascript
  // Array de {start, end, cls} — rangos ya asignados
  const ranges = []

  for (const rule of rules) {
    const re = new RegExp(rule.re.source, rule.re.flags)
    let match
    while ((match = re.exec(code)) !== null) {
      let start = match.index
      let text = match[1] || match[0]
      // Si la regla usa keep (ej. ".log" → colorear solo "log")
      if (rule.keep) {
        start += rule.keep.length
        text = text.slice(rule.keep.length)
      }
      const end = start + text.length
      // Verificar que no se solape con rangos previos
      const overlaps = ranges.some(
        (r) => start < r.end && end > r.start
      )
      if (!overlaps) {
        ranges.push({ start, end, cls: rule.cls })
      }
    }
  }

  // Ordenar por posición
  ranges.sort((a, b) => a.start - b.start)

  // Construir fragmentos
  const fragments = []
  let pos = 0
  for (const r of ranges) {
    if (r.start > pos) {
      fragments.push({ text: code.slice(pos, r.start), cls: null })
    }
    fragments.push({ text: code.slice(r.start, r.end), cls: r.cls })
    pos = r.end
  }
  if (pos < code.length) {
    fragments.push({ text: code.slice(pos), cls: null })
  }

  return fragments
}

export function HighlightedCode({ code, lang }) {
  const fragments = tokenize(code, lang)
  return (
    <div className="code-block">
      {fragments.map((f, i) =>
        f.cls ? (
          <span key={i} className={f.cls}>{f.text}</span>
        ) : (
          <span key={i}>{f.text}</span>
        )
      )}
    </div>
  )
}

/**
 * Colorea fórmulas algebraicas.
 * Identifica: variables mayúsculas (tipos), minúsculas (vars), operadores,
 * símbolos especiales, strings/keywords.
 */
export function HighlightedFormula({ text }) {
  // Tokenizar la fórmula
  const rules = [
    // Operadores/flechas
    { re: /(:=|->|<-|===|=>|forall|\|->)/g, cls: 'fm-op' },
    // Conjuntos/tipos matemáticos
    { re: /\b([A-Z](?:\b|(?=[^a-z])))/g, cls: 'fm-set' },
    // Palabras clave de fórmula
    { re: /\b(con|en comportamiento|tiene|void)\b/g, cls: 'fm-kw' },
    // Nombres tipo (mayúscula seguida de minúsculas)
    { re: /\b([A-Z][a-zA-Z]+)\b/g, cls: 'fm-type' },
    // Variables / funciones (minúsculas)
    { re: /\b([a-z][a-z_]*)\b/g, cls: 'fm-var' },
    // Números
    { re: /\b(\d+)\b/g, cls: 'fm-num' },
    // Paréntesis y llaves
    { re: /([{}()\[\]])/g, cls: 'fm-brace' },
    // Puntuación especial
    { re: /([:|,.])/g, cls: 'fm-punct' },
  ]

  const ranges = []

  for (const rule of rules) {
    const re = new RegExp(rule.re.source, rule.re.flags)
    let match
    while ((match = re.exec(text)) !== null) {
      const start = match.index + (match[0].length - match[1].length)
      const end = start + match[1].length
      const overlaps = ranges.some((r) => start < r.end && end > r.start)
      if (!overlaps) {
        ranges.push({ start, end, cls: rule.cls })
      }
    }
  }

  ranges.sort((a, b) => a.start - b.start)

  const fragments = []
  let pos = 0
  for (const r of ranges) {
    if (r.start > pos) {
      fragments.push({ text: text.slice(pos, r.start), cls: null })
    }
    fragments.push({ text: text.slice(r.start, r.end), cls: r.cls })
    pos = r.end
  }
  if (pos < text.length) {
    fragments.push({ text: text.slice(pos), cls: null })
  }

  return (
    <>
      {fragments.map((f, i) =>
        f.cls ? (
          <span key={i} className={f.cls}>{f.text}</span>
        ) : (
          <span key={i}>{f.text}</span>
        )
      )}
    </>
  )
}
