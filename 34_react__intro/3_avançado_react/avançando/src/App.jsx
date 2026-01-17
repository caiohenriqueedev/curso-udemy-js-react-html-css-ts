import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - imagem em assets
import noite from './assets/noite.jpg';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
    <h1> Avançando em React</h1>
    {/* 1 - imagem em public*/}
    <img src="noite.jpg" alt="imagem da rua" />
    {/* 2 - imagem em assets*/}
    <img src={noite} alt="imagem da noite" />
    </div>
  )
}

export default App
