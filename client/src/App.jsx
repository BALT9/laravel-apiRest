import { useState } from 'react'
import Profile from './components/Prueba'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola</h1>
      <Profile></Profile>
    </>
  )
}

export default App
