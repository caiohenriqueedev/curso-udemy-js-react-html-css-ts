import MyComponent from "./MyComponent"

// 1 - criando componente
const firstComponent = () => {
return (
    <div>
        <h2>
            Meu primeiro componente
            <MyComponent/>
        </h2>
    </div>
)
}

export default firstComponent