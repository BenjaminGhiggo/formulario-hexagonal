import PageTemplate from './PageTemplate'
import { ddd } from '../domain/ddd'
import '../infra/Fundamentos.css'

export default function Ddd() {
  return (
    <PageTemplate
      title="Domain-Driven Design"
      subtitle="15 conceptos — entidades, value objects, aggregates, capas y patrones estrategicos"
      items={ddd}
    />
  )
}
