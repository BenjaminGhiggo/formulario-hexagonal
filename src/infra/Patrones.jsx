import PageTemplate from './PageTemplate'
import { patrones1 } from '../domain/patrones-1'
import { patrones2 } from '../domain/patrones-2'
import '../infra/Fundamentos.css'

const items = [...patrones1, ...patrones2]

export default function Patrones() {
  return (
    <PageTemplate
      title="Patrones de Diseno"
      subtitle="24 patrones GoF — creacionales, estructurales y de comportamiento"
      items={items}
    />
  )
}
