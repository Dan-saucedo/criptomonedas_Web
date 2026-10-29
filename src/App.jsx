import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <h1 className="holamundo"> Hola mundo </h1>
    </main>
  )
}

export default App
