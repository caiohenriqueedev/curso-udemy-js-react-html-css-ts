import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log(e);
        console.log("executou");
    };

    // 8 - função de renderização
    const renderSomething = (x) => {
        if(x){
            return <h1>renderizando isso</h1>;
        } else{
            return <h1> renderizando outra coisa!</h1>;
        
        }
    };

    // return 10 > 2 && <p>carregando...</p>;

  return (
    <div>
    <div>
        <button onClick ={() => console.log("testando um evento")}>
            clique aqui
        </button>
    </div>
    {/* 7 - evento com função */}
    <div>
        <button onClick={handleClick}> clique aqui - com função</button>
    </div>
    {/* 8 - funcao com render */}
    {renderSomething(true)}
    {renderSomething(false)}
    </div>
  );
};

export default Events;