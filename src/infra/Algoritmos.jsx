import PageTemplate from './PageTemplate'
import { algoritmos } from '../domain/algoritmos'
import '../infra/Fundamentos.css'

export default function Algoritmos() {
  return (
    <PageTemplate
      title="Algoritmos Basicos"
      subtitle="Ordenamiento, busqueda, recursion — implementados paso a paso"
      items={algoritmos}
    />
  )
}
