import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div className="App">
      <h1>Form em react</h1>
      <MyForm userName="Matheus" email="matheushoradecodar@gmail.com"/>
    </div>
  ) 
}

export default App
