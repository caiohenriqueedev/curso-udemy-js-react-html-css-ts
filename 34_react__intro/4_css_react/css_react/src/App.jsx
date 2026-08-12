import './App.css'

// 2  css de componente
import MyComponents from './MyComponents'

function App() {

  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>Css global</h1>
      {/* 2 - css de componente */}
      <MyComponents />
    </div>
  )
}

export default App
