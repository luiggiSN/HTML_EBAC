function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Carro.prototype.fazerSom = function() {
    throw new Error('Algo inesperado aconteceu 😰 ,o fazerSom não foi inserido nas subclasses 😮');
}

function HondaK20(marca, modelo) {
    Carro.call(this, marca, modelo);
}

HondaK20.prototype = Object.create(Carro.prototype);

HondaK20.prototype.fazerSom = function() {
    return "Raaannnn daan daan daan daan ";
}


function F250(marca, modelo) {
    Carro.call(this, marca, modelo);
}

F250.prototype = Object.create(Carro.prototype);

F250.prototype.fazerSom = function() {
    return "RAAAAAMMMMM TCCCHUUUUUUU!!!";
}

function RX7(marca, modelo) {
    Carro.call(this, marca, modelo);
}

RX7.prototype = Object.create(Carro.prototype);

RX7.prototype.fazerSom = function() {
    return "BRAH BRAH BRAH BRAH BRAH BRAH BRAH";
}

const Carro1 = new HondaK20("CIVIC SI", 192);
const Carro2 = new RX7("MAZDA RX7", 256);
const Carro3 = new F250("FORDONA F250", 190);

console.log(`${Carro1.marca} tem ${Carro1.modelo} pocotos e faz: ${Carro1.fazerSom()}`);
console.log(`${Carro2.marca} tem ${Carro2.modelo} pocotos e faz: ${Carro2.fazerSom()}`);
console.log(`${Carro3.marca} tem ${Carro3.modelo} pocotos e faz: ${Carro3.fazerSom()}`);