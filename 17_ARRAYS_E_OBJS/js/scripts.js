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
    
}