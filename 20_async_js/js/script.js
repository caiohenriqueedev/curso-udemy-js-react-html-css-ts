// 1 - setTimeout
console.log("ainda nao executou");

setTimeout(() => {
    
    console.log("requisição assincrona");
}, 2000);

console.log("ainda nao executou 2");

// 2 - setInterval
console.log("ainda nao começou");

// setInterval(function (){
//     console.log("intervalo assincrono");
// }, 3000);

console.log("ainda nao começou 2");

// 3 - promise
const promessa = Promise.resolve(5 + 5);

console.log("algum codigo");

promessa
    .then((value) => {
    console.log(`a soma é ${value}`);
    return value;
})

.then((value) => value - 1)
.then((value) => console.log(`agora é ${value}`));

console.log("outro código");

// 4 - falha na promise
Promise.resolve(4 * "asd")
.then((n) =>{
    if(Number.isNaN(n)){
        throw new error("valores inválidos");
    }
})
.catch((error) => console.log(`um erro ocorreu: ${error}`));

// 5 - rejeição
function checkNumber(n){
    return new Promise((resolve, reject) => {
    if(n > 10){
        resolve(`o numero é maior que 10`);
    } else {
        reject(new Error("número muito baixo"));
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);

console.log(a, b);

a.then((v) => console.log(`o resultado é ${v}`)).catch((error) =>
    console.log(`um erro ocorreu: ${error}`)
);

b.then((v) => console.log(`o resultado é ${v}`)).catch((error) =>
    console.log(`um erro ocorreu: ${error}`)
);

// 6 - resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000);
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10) {
        resolve(30);
    } else {
        reject("erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async functions
async function SomarComDelay(a, b) {
    return a + b;
}

SomarComDelay(2, 4).then((value) => {
    console.log(`o valor da soma é ${value}`);
});

console.log("teste async");

// 8 - async await 
function resolveComDelay (){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolveu a promise");
        }, 2000);
    });
}

async function ChamadaAsync() {
    console.log("chamando a promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`o resultado chegou: ${result}`);    
}

ChamadaAsync();

// 9 - generators
function* generators(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generators();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);