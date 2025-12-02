// 4 - template expression

const TemplateExpression = () => {

    const name = "Matheus";

    const data = {
        age: 31,
        job: "programador"
    }

  return (
    <div>
    <p>a soma é { 2 + 2} </p>
    <h3>bem vindo {name}</h3>
    <p>sua idade é {data.age} anos e voce é um {data.job}.</p>
    </div>
  );
};

export default TemplateExpression