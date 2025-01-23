//### Objetos ###

//#### Declaración ####

//ejercicio 1

const coche = {
  marca: "Audi",
  modelo: "A3",
  matricula: "1234ABC",
};

//ejercicio 2

const casa = {
  codPostal: 48004,
  calle: "Txotena",
  portal: 12,
  piso: "2 izda",
};

//ejercicio 3

const FullStackDeveloper = {
  "array lenguajes": ["JavaScript", "Python", "C#", "TypeScript"],
  "array proyectos": ["proyecto1", "proyecto2", "proyecto3"],
};

//ejercicio 4

const perro = {
  nombre: "Rex",
  raza: "Pastor Alemán",
  color: "Marrón",
  edad: 4,
  ladrar: function () {
    console.log("Guau guau");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

// #### Lectura de propiedades ####

//ejercicio 5

const portatil = {
  marca: "Apple",
};
const marcaPortatil = portatil.marca;

//ejercicio 6

let marcaPortatil2 = portatil["marca"];

//ejercicio 7

const concierto = {
  "array grupos": ["grupo1", "grupo2", "grupo3"],
};
const grupos = concierto["array grupos"];

//ejercicio 8

const led = {
  rojo: "red",
  verde: "green",
  azul: "blue",
};
const RGB = [led.rojo, led.verde, led.azul];

// #### Modificación de propiedades ####

//ejercicio 9

portatil.modelo = "P345";

//ejercicio 10

concierto.cartelera = "Guns N' Roses";

//ejercicio 11

concierto.fecha = new Date();

//ejercicio 12

//ejercicio 13
//ejercicio 14
//ejercicio 15
//ejercicio 16
//ejercicio 17
//ejercicio 18
//ejercicio 19
//ejercicio 20
//ejercicio 21
//ejercicio 22
