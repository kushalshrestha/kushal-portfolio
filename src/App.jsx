import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Kushal Shrestha</h1>
      <h2>Software Engineer</h2>
      <Menu/>
    </>
  )
}

export default App
