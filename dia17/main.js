const btn = document.querySelector("#btn");
const img = document.querySelector("#imagen");

// Array con las fases (texto + imagen)
const fases = [
  {
    nombre: "Anakin Niño",
    imagen: "https://img.europapress.es/fotoweb/fotogaleriafamosos_132698.jpg",
  },
  {
    nombre: "Anakin Jedi",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ4ixzAyKiChYNZaEFbeylJsxXNXiLXKdHg&s",
  },
  {
    nombre: "Darth Vader",
    imagen: "https://i.ebayimg.com/images/g/NckAAOSwDDhmqLYc/s-l1200.jpg",
  },
  {
    nombre: "Vader sin casco",
    imagen:
      "https://i.pinimg.com/736x/2f/5d/2b/2f5d2b43248ebc96549089a07f911e0d.jpg",
  },
  {
    nombre: "Baby Yoda",
    imagen:
      "https://media.revistagq.com/photos/5fbfd8d6d19648d9db990635/16:9/w_1280,c_limit/baby-yoda-macaron.jpg",
  },
];

// Índice para avanzar por el array
let indice = 0;

btn.addEventListener("click", () => {
  // Avanzar al siguiente
  indice = (indice + 1) % fases.length;

  // Actualizar texto del botón e imagen
  btn.textContent = fases[indice].nombre;
  img.setAttribute("src", fases[indice].imagen);
});
