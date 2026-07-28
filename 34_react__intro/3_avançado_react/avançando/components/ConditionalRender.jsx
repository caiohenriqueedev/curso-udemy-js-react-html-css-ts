const ConditionalRender = () => {
    const x = true;
    
    const name = "Matheus";

  return <div>
    {/* 7 - render condicional */}
    <h3>
        isso sera exibido?
        {x && <p>Se x for true, sim</p>}
    </h3>

    {/* 8 - else */}
    <h3>Render ternário</h3>
    {name === "João" ?(
        <div>
            <p>Olá, João!</p>
        </div>
    ):(
        <div>
            <p>não não encontrado</p>
        </div>
    )}
  </div>
  
};

export default ConditionalRender