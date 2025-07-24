// 1 - var, let e const
var x = 10;
var y = 15;

if(y > 10){
    var x = 5
    console.log(x);
};

console.log(x);

let a = 10;
let b = 15;

if(b > 10){
    let a = 5;
    console.log(a);
};

console.log(a);

function logName(){
    const name = "Pedro";
    console.log(name);
}

const name = "Matheus";

logName();

console.log(name);

// 2 - arrow function
const sum = function(a, b){
    return a + b
};

const arrowSum = (a, b) => a + b;

console.log(sum(5,5));

console.log(arrowSum(5, 5));

const greeting = (name) => {

    if(name){
        return`Hello ${name}!`
    }else{
        return "Hello"
        }
    }
console.log(greeting("Natheus"));
console.log(greeting());

const user = {
    name: "Theo",
    sayUserName(){
        setTimeout(function(){
            console.log(this);
            console.log(`username: ${this.name}`);

        }, 1000);
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000);
    },
};

user.sayUserName();

// 3 - filter
const arr = [1,2,3,4,5,6];

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
});

console.log(highNumbers);

const users = [
    {name: "Matheus", available: true},
    {name: "João", available: false},
    {name: "Maria", available: true},
    {name: "Josias", available: false},
    {name: "Kleber", available: true},
]

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// 4 - map
const products = [
    {name: "camisa", price: 10.99, category:"roupas"},
    {name: "chaleira Elétrica", price: 150, category:"eletro"},
    {name: "fogão", price: 499, category:"eletro"},
    {name: "calça jeans", price: 87.99, category:"roupas"},
]

products.map((product) => {
    if(product.category === "roupas"){
        product.onSale = true
    }
});

console.log(products);

// 5 - template literals
const userName = "Matheus"
const age = 31

console.log(`o nome do usuario é ${userName} e ele tem ${age} anos`);

// 6 - destructuring
const fruits = ["maça", "mamão", "laranja"]

const [f1, f2, f3] = fruits

console.log(f1, f3);

const productDetails = {
    name: "mouse",
    price: 39.99,
    category:"periférico",
    color: "cinza",
};

const {name: productName, price, category, color} = productDetails;

console.log(`o nome do produto é ${productName}, e ele custa R$${price} e é da cor ${color}.`);

// 7 - spred operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = {name: "Gol"};
const carBrand = {brand: "VW"};
const otherInfos = {km: 100000, price: 49999};

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);

// 8 - classes
class product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new product ("Camisa gola V", 20);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - Herança
class ProductWithAttributes extends product {

    constructor(name, price, colors){
        super(name, price);
        this.colors = colors;
    }

    showColors(){
        console.log("As cores são:");
        this.colors.ForEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("chapéu", 29.99, [
    "preto", "amarelo", "verde"]);

console.log(hat);

console.log(hat.name);

// teste