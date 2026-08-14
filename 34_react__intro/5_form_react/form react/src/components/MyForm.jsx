import "./MyForm.css"

import { useState } from "react"

const MyForm = () => {
    //  3 - gerenciando dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = () => {
        setName(e.target.value)
    };

    // 5 - envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email);
    }

    console.log(name, email);

  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formulario */}
        <form onSubmit={handleSubmit}>
        </form>

        <form>
            <div>
                <label htmlFor="name"> Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
            </div>
            <input type="submit" value="Enviar" />
        </form>
        {/* 2 - label envolvendo input */}
        <label>
            <span>E-mail:</span>
            <input type="email" name="email" placeholder="Digite o seu e-mail" 
            // 4 - simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" value="Enviar" />
    </div>
  )
}

export default MyForm