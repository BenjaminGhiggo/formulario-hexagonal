import PageTemplate from './PageTemplate'
import { poo } from '../domain/poo'
import '../infra/Fundamentos.css'

export default function Poo() {
  return (
    <PageTemplate
      title="Programacion Orientada a Objetos"
      subtitle="Los 4 pilares y conceptos avanzados — con ejemplos aritmeticos"
      items={poo}
    />
  )
}
