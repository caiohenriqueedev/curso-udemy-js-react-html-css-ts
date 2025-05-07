// 1 - arrays
const lista = [1,2,3,4,5];

console.log(lista);

console.log(typeof lista);

const itens = ['Matheus', true, 2, 4.12, []];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0]);

console.log(arr[3]);

console.log(arr[83]);

// 3 - propiedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers['length']);

const myName = "Matheus";

console.log(myName.length);

// 4 - metodos
const OtherNumbers = [1, 2, 3];

const AllNumbers = numbers.concat(OtherNumbers);

console.log(AllNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propiedades

const car = {
    motor: 2.0,
    brand: "VW",
    model: "tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true,    
};

console.log(obj instanceof Object);

const objs2 = {
    c: [],
};

Object.assign(objs2, obj);

console.log(obj);

console.log(objs2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(objs2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const a = {
    name: "Matheus"
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);

delete b.age

console.log(b);
console.log(a);

// 10 - loop em array

const users = ["Matheus", "João", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuario ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

<<<<<<< HEAD
// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Perâ", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice
const testeSlice = ["a", "b", "c","d","e","f"];

const subArray = testeSlice.slice(2,4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2 + 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero)=>{
    console.log(`O numero é ${numero}`);
});

const posts = [
    {title: "primeiro post", category: "PHP"},
    {title: "segundo post", category: "JavaScript"},
    {title: "terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`exibindo post: ${post.title}, da categoria ${post.category}`);
});

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if(brands.includes("BMW")){
    console.log("há carros dessa marca BMW!");
}

// 17 - reverse
const reverseTest = [1,2,3,4,5]

reverseTest.reverse();

console.log(reverseTest);

// 18 - trim
const trimTest = "testando \n";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "o rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 20 - join
const FraseDeNovo = arrayDaFrase.join("");

console.log(FraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado","Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(",")}.`;

console.log(fraseDeCompra);
=======
// 13 - IndexOf e lastIndexOf
const MyElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(MyElements.indexOf("Maçã"));
>>>>>>> e7b169b6b9f15bca2281a8e2475672c1f2d2f2b5
