let frutas = [
  "manzana",
  "naranja",
  "pera",
  "banana",
  "sandia",
  "kiwi",
  "frutilla",
];

let notas = [100, 89, 20, 45, 51];

let notasDoble = [];

for (let i = 0; i < notas.length; i++) {
  let aux = notas[i];
  notasDoble.push(notas[i] * 2);
}

let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let promedios = 0;

notasFunval.forEach((n) => {
  promedios += n / notasFunval.length;
});

console.log(promedios);

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

let estudianteAprobado = [];
estudiantes.forEach((e) => {
  let promedio = 0;
  for (let i = 0; i < e.notas.length; i++) {
    promedio += e.notas[i] / e.notas.length;
  }
  if (promedio > 51) {
    estudianteAprobado.push({ nombre: e.nombre, promedio: promedio });
  }
});

console.log(estudianteAprobado);

let estudiasntesArgentinos = estudiantes.filter((e) => e.pais == "Argentina");

console.log(estudiasntesArgentinos);
