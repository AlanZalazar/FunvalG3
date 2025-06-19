function conseguirTrabajo() {
  let entrevista = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (entrevista) {
        resolve("me acercaron una entrevista, consegui trabajo remoto :D");
      } else {
        reject("termino 2025, toca chambear de albañil :c");
      }
    }, 3000);
  });
}

//conseguirTrabajo()
//.then((trabajando)=>{console.log(trabajando);})
//.catch((error)=> {console.log(error);});

let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
];

// Seleccionamos el contenedor
const app = document.getElementById("card-container");

// Recorremos los datos y creamos las cards
datos.forEach((persona) => {
  const card = document.createElement("card");
  card.className = ;

  card.innerHTML = `
  <div class="border grid grid-cols-3">
    <h3>${persona.nombre}</h3>
    <p>Edad: ${persona.edad}</p>
    <p>País: ${persona.pais}</p>
    </div>
  `;

  app.appendChild(card);
});
