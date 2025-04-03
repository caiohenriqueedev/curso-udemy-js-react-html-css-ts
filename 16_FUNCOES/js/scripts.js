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