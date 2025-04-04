// 1 - criando uma função
function minhaFuncao(){
    console.log("Testando!");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("função em variavel");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("imprimindo alguma coisa");

funcaoComParametro("imprimindo: outra função");

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log((c, d));

// 3 - escopo da função
let y = 10

function TestandoEscopo (){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

TestandoEscopo();

y = 15;

console.log(`Y fora da função é: ${y}`);

TestandoEscopo();

// 4 - escopo aninhado
let m = 10;

function EscopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

        if(true){
            let m = 40;

        console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

EscopoAninhado();

console.log(m);

// 5 - arrow function
const testeArrow = () => {
    console.log("está é uma arrow function");
};

testeArrow();

const ParOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par");
        return;
    }

    console.log("Impar");

};

ParOuImpar(5);

ParOuImpar(10);

//  6 - mais sobre arrow functions
const RaizQuadrada = (x) => {
    return x * x;
};

console.log(RaizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(RaizQuadrada(12));

const helloworld = () => console.log("hello world");

helloworld();

// 7 - parametro opcional

const multiplication = function(m, n){
    if(n === undefined){
        return m * 2;   
    } else {
        return m * n;
    }
}

console.log(multiplication(5));

console.log(multiplication(2, 4));

const greeting = (name) => {
    if(!name){
        console.log("olá")
        return
        
    }

    console.log(`olá ${name}!`)

}

greeting();

greeting("Matheus");

// 8 - valor default
const customGreeting = (name, greet = "Olá") => {
    return `$(greet), ${name}!`;
};

console.log(customGreeting("Matheus"));

console.log(customGreeting("João", "Bom dia!"));

const repeatText = (text, repeat = 2)=>{
    for(let i = 0; i < repeat; i++){
        console.log(text);
    }
};

repeatText("testando");

repeatText("agora repete 5 vezes", 5);

// 9 - closure

function someFunction(){
    let txt = "alguma coisa";

    function display(){
        console.log(txt);

    }

    display();
}

someFunction();

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
    return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - recursion
const untilTen = (n, m) =>{
    if(n < 10){
        console.log("a função parou de executar");
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 7);

// // infinite recursion
// function run() {
//     console.log("executando...");
//     run();
// }

// run();

function factorial(x){
    if(x === 0){
        return 1
    } else {
        return x * factorial (x - 1)
    }
}

const num = 6

const result = factorial(num);

console.log(`o fatorial de um numero ${num} e ${result}`);