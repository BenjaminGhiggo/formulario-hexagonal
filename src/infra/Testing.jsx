import PageTemplate from './PageTemplate'
import { testing } from '../domain/testing'
import '../infra/Fundamentos.css'

export default function Testing() {
  return (
    <PageTemplate
      title="Testing"
      subtitle="Unit tests, mocks, TDD — sin frameworks, desde cero"
      items={testing}
    />
  )
}
