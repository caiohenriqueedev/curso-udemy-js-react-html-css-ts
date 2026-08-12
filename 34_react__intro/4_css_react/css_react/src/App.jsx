import './App.css'

// 2  css de componente
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  // 4 - css inline dinamico
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>Css global</h1>
      {/* 2 - css de componente */}
      <MyComponents />
      <p> Pegou o CSS do componente</p>
      {/* 3 - css inline */} 
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este é um parágrafo com CSS inline</p>
    {/* 4 - inline style dinâmico */}
    <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
      Este é um título dinâmico
    </h2>
    <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
      Este é um título dinâmico
    </h2>
    {/* 5 - classe dinâmica */}
    <h2 className={redTitle ? "red-title" : ""}>Este é um título com classe dinâmica</h2>
    {/* 6 - CSS modules */}
    <Title />
    </div>
  )
}

export default App
