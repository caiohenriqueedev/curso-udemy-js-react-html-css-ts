// 1 - variavéis
let nome = "Matheus";

// ponto e virgula e opcional
console.log(nome);

nome = "Matheus Battisti"

console.log(nome);

const idade = 31;

console.log(idade);

// idade = 32;

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variavéis
// let 2teste = "invalido"
// let @teste = "invalido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";

const nomeCompleto = "João da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste);

// 3 - prompt
const age = prompt("digite a sua idade:")

console.log(`voce tem ${age} anos.`)

// 4 - alert
alert("testando!");

const z = 10

alert(`o numero é ${z}`);

// 5 - math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console
console.log("teste!");

console.error("erro");

console.warn("aviso!");

// 7 - if
const m = 10;

if(m >5){

    console.log("M é maior que 5!");

}

const user = "joão"

if(user === "joão"){
    console.log("Olá João!");
}

if(user === "Maria"){
    console.log("Olá Maria!");
}

console.log(user === "joão", user === "Maria");

// 8 - else
const loggedIn = false

if(loggedIn){
    console.log("esta autenticado!")   
} else {
    console.log("não está autenticado!")
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("numeros mais altos")
} else {
    console.log("os numeros não são mais altos!")
}

// else if 
if(1 > 2){
    console.log("teste");
} else if(2 > 3){
    console.log("teste 2");
} else if (5 > 1){
    console.log("agora sim!")
}

const userName = "Matheus"
const userAge = 31

if(userName === "José"){
    console.log("bom vindo josé!")
} else if(userName === "Matheus" && userAge === 31){
    console.log("olá Matheus, você tem 31 anos!")
} else {
    console.log("nenhuma condição aceita!");
}

// 10 - while

let p = 0

while(p < 5){
    console.log(`repetindo ${p}`)
    p = p + 1;
}

// loop infinito
// let x = 10;

// // while(x > 5){
//     // console.log(`imprimindo ${x}`);
// }

// 11 - do while
let o = 10;

do{
    console.log(`valor de o: ${o}`);
    o--
} while(o > 1);

// 12 - for
for(let t = 0; t < 10; t++){
    console.log("repetindo algo...");
}

let r = 10;

for(r; r > 0; r = r - 1){
    console.log("o r está diminuindo!");
}

// 13 - identação
for(let u = 0; u < 10; u++){
    if(u* 2 > 10){
        console.log(`maior que 10! ${u}`);
} else {
    if(u / 2 === 0){
        console.log("deu 0");
        }
    }
}

// 14 - break
for(let g = 20; g > 10; g--){
    console.log(`o valor de g é: ${g}`);

    if(g === 13){
        console.log("o g é 12!");
        break;
    }
}

// 15 - continue
for(let s = 1; s < 10; s = s +1){
    // operador resto = %
    if(s % 2 === 0){
        console.log("numero par");
        continue;
    }
    console.log(s);
}

// 16 - switch
const job = "advogado"

switch(job){
    case "programador":
        console.log("você é um programador!")
    break
    case "advogado":
        console.log("você é um advogado!")
        break
    case "engenheiro":
        console.log("você é um engenheiro!")
        break
        default:
            console.log("profissão não encontrada");
}

// switch "errado"
const l = 100;

switch(l){
    case 200:
        console.log("L é 200!");
    case 100:
        console.log("L é 100!");
    case 10:
        console.log("L é 10!");
    default:
        console.log("L não foi encontrado!");

}

// 17 - convenção de nomes
// let programadorcadastro (ruim)
// let ProfissaoCadastrada (bom/ideal)