let estudiantes = [
  {
    nombre: "Felipe",
    edad: 33,
    pais: "Chile",
  },
  {
    nombre: "Pablo",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Juana",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Mahonri",
    edad: 18,
    pais: "Guatemala",
  },
  {
    nombre: "Carlo",
    edad: 50,
    pais: "Peru",
  },
  {
    nombre: "Thomas",
    edad: 33,
    pais: "Argentina",
  },
];

let tabla = document.querySelector(".contenido-tabla");

for (let i = 0; i < estudiantes.length; i++) {
  tabla.innerHTML += `<tr>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].edad}</td>
            <td>${estudiantes[i].pais}</td>
          </tr>`;
}

// Creamos y configuramos el contenedor principal
let contenedor = document.querySelector(".contenedor-cards");
contenedor.style.display = "grid";
contenedor.style.gridTemplateColumns = "repeat(3, 1fr)";
contenedor.style.gap = "1rem";
contenedor.style.padding = "1rem";

// Crear una card para cada estudiante
for (let i = 0; i < estudiantes.length; i++) {
  let card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "8px";
  card.style.padding = "1rem";
  card.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.1)";
  card.style.backgroundColor = "white";

  // Contenido de la tarjeta
  card.innerHTML = `
    <h2 style="margin: 0 0 0.5rem 0">${estudiantes[i].nombre}</h2>
    <p><strong>Edad:</strong> ${estudiantes[i].edad}</p>
    <p><strong>País:</strong> ${estudiantes[i].pais}</p>
  `;

  contenedor.appendChild(card);
}
