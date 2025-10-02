import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input placeholder='Введите свою строку'/>
    </>
  )
}

export default App
