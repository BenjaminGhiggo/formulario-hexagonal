import PageTemplate from './PageTemplate'
import { sql } from '../domain/sql'
import '../infra/Fundamentos.css'

export default function Sql() {
  return (
    <PageTemplate
      title="SQL Completo"
      subtitle="DDL, DML, JOINs, funciones agregadas, subqueries — 23 temas"
      items={sql}
      sqlMode
    />
  )
}
