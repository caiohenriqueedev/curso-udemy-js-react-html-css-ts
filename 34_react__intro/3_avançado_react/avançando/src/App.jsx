import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 2 - imagem em assets
import noite from "./assets/noite.jpg";

// 3 - useState
import Data from "../components/Data";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1> Avançando em React</h1>
      {/* 1 - imagem em public*/}
      <img src="/rua.jpg" alt="alguma imagem" />
      {/* 2 - imagem em assets*/}
      <img src={noite} alt="imagem da noite" />
      {/* 3 - useState */}
      <Data />
    </div>
  );
}

export default App;
