import PageTemplate from './PageTemplate'
import { solid } from '../domain/solid'
import '../infra/Fundamentos.css'

export default function Solid() {
  return (
    <PageTemplate
      title="Principios SOLID"
      subtitle="5 principios — antes (mal) y despues (bien) con ejemplos simples"
      items={solid}
      hasBad
    />
  )
}
