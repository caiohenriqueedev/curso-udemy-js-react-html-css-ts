import "./App.css";

// 2 - imagem em assets
import noite from "./assets/noite.jpg";

// 3 - useState
import Data from "../components/Data";

// 4 - renderização de lista
import ListRender from "../components/ListRender";

// 7 - render condicional
import ConditionalRender from "../components/ConditionalRender";

// 8 - props
import ShowUserName from "../components/ShowUserName";

// 9 - desestruturação de props
import CarDetails from "../components/CarDetails";

// 12 - fragment
import Fragment from "../components/Fragment";

// 13 - children
import Container from "../components/Container";

// 14 - função em prop
import ExecuteFunction from "../components/ExecuteFunction";

// 15 - state lift
import { useState } from "react";
import Message from "../components/Message";
import ChangeMessage from "../components/ChangeMessage";

// 11 - renderização de lista com componentes
const cars = [
  { id: 1, brand: "VW", km: 100000, color: "Azul" },
  { id: 2, brand: "Ford", km: 0, color: "Vermelho" },
  { id: 3, brand: "Fiat", km: 45000, color: "Branco" },
];

function App() {
  // 14 - função em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>

      {/* 1 - imagem em public */}
      <img src="/rua.jpg" alt="alguma imagem" />

      {/* 2 - imagem em assets */}
      <img src={noite} alt="imagem da noite" />

      {/* 3 - useState */}
      <Data />

      {/* 4 - renderização de lista */}
      <ListRender />

      {/* 7 - render condicional */}
      <ConditionalRender />

      {/* 8 - props */}
      <ShowUserName name="Matheus" />

      {/* 9 - desestruturação de props */}
      <CarDetails brand="VW" km={100000} color="Azul" />
      <CarDetails brand="Ford" km={0} color="Vermelho" />
      <CarDetails brand="Fiat" km={45000} color="Branco" />
      <CarDetails brand="Chevrolet" km={1000} color="Preto" />

      {/* 11 - renderização de lista com componentes */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}

      {/* 12 - fragment */}
      <Fragment />

      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;