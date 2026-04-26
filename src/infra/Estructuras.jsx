import PageTemplate from './PageTemplate'
import { estructuras } from '../domain/estructuras'
import '../infra/Fundamentos.css'

export default function Estructuras() {
  return (
    <PageTemplate
      title="Estructuras de Datos"
      subtitle="Pilas, colas, listas, arboles, grafos — implementados desde cero"
      items={estructuras}
    />
  )
}
