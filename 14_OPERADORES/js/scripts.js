// 1 - number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

//  2 - ops aritimetricas
console.log(2+ 4);
console.log(10 - 5 );
console.log(5 * 4 );
console.log(10 - 2 );

console.log(5+(4*2));

// 3 - special numbers
console.log(typeof Infinity);

console.log(typeof - Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - strings
console.log("um texto");
console.log(`um texto`);
console.log(`13`);


console.log(typeof `um texto`);
console.log(typeof `13`);

// 5 - simbolos especiais em string
console.log("testando a \n quebra de linha")

console.log("espaçamento \t de tab");

// 6 - concatenação
console.log(" oi "+" tudo "+" bem? ");

console.log(` testando `+` com `+` crase! `);

// 7 - template strings
console.log(`a soma de 2 +2 é: ${2+2}`);

console.log(`podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - identico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 !== "9");

// 11 - operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 > 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudanças de tipos
console.log(5 * null);

console.log("teste" * "opa");

// concatenação
console.log("10" + 1);

// subtração normal mesmo
console.log("10" - 1);