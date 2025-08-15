import { useState } from 'react'

function Header() {
  return <h1>TTPro — Task Tracker</h1>
}

function TaskInput({ onAdd }) {
  return (
    <form>
      <input placeholder="Add a task..." />
      <button type="submit">Add</button>
    </form>
  )
}

function TaskList({ items }) {
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  )
}

export default function App() {
  const [tasks] = useState([{ id: 1, title: 'Sample task' }, {id: 2, title: 'Sample task 2'}])

  return (
    <div style={{ maxWidth: 560, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <Header />
      <TaskInput onAdd={() => {}} />
      <TaskList items={tasks} />
    </div>
  )
}
