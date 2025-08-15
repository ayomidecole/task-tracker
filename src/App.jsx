import { useState } from 'react'

function Header() {
  return <h1>TTPro — Task Tracker</h1>
}

function TaskInput({ onAdd }) {

  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const title = text.trim()
    if (!title) return
    onAdd(title)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginTop: 12 }}>
      <input 
      placeholder="Add a task..." 
      value={text}
      onChange={(e) => setText(e.target.value)}
      aria-label="Task title"
      />
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
  const [tasks, setTasks] = useState([{ id: 1, title: 'Sample task', done:false }, {id: 2, title: 'Sample task 2', done:false}])

  function addTask(title) {
    const newTask = { id: Date.now(), title, done: false }
    setTasks((prev) => [newTask, ...prev])
  } 

  return (
    <div style={{ maxWidth: 560, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList items={tasks} />
    </div>
  )
}
