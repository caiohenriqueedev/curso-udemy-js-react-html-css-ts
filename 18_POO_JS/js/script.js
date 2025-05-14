// 1 - metodos
const animal = {
    nome: "Bob",
    latir: function(){
    console.log("au au");

    },
};

console.log(animal.nome);

animal.latir();

// 2 - aprofudando em métodos
const Pessoa = {
    nome: "Matheus",

    getNome: function(){
        return this.nome;
    },
};

console.log(Pessoa.nome);

console.log(Pessoa.getNome());

Pessoa.getNome("Joaquim");

console.log(Pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas
const cachorro = {
    raca: null,
    patas: 4
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
};

const bob = criarCachorro("Bob", "Vira-Lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funções como classe
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - metodos na funcao construtora
Cachorro.prototype.uivar = function(){
    console.log("auuuuuuuu!");
    };

    console.log(Cachorro.prototype);

    husky.uivar();

    // 9 - classes es6
    class CachorroClasse {
        constructor(nome, raca){
            this.nome = nome
            this.raca = raca
        }
    }

    const jeff = new CachorroClasse("Jeff", "Labrador");

    console.log(jeff);

    console.log(Object.getPrototypeOf(jeff));

    // 10 - mais sobre classes
    class Caminhao {
        constructor(eixos, cor){
            this.eixos = eixos
            this.cor = cor

        }
        descreverCaminhao(){
            console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
        }
    }

    const scania = new Caminhao(6, "Vermelha");

    console.log(scania)

    scania.descreverCaminhao();

    Caminhao.motor = 4

    const c2 = new Caminhao(4, "Preta");

    console.log(c2);

    console.log(c2.motor);

    Caminhao.prototype.motor = 4.0;

    const c3 = new Caminhao(6, "Azul");

    console.log(c3);

    // 11 - override
    class Humano {
        constructor(nome, idade){
    this.nome = nome
    this.idade = idade

    }   
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "Não definida"

console.log(matheus.idade);

console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
    constuctor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol();
const pilotos = Symbol ();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }
}

const MyPost = new Post("Algum Post", "é um post sobre programação");