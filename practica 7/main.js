//Eres el encargado de manejar los datos de una tienda en línea.
//  La tienda tiene una lista de productos disponibles y una lista
//  de pedidos realizados por los clientes.

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

//Recorrer y mostrar productos (forEach)
productos.forEach((e) => {
  console.log(`${e.nombre}: $${e.precio}.00`);
});

//Crear un array de nombres de productos y verificar disponibilidad (map + includes)
let nombreProductos = productos.map((e) => e.nombre);
console.log(nombreProductos);

function estaDisponible(nombre) {
  if (nombreProductos.includes(nombre.toLowerCase())) {
    console.log(`El producto ${nombre} se encuentra disponible`);
  } else {
    console.log(`El producto ${nombre} no está disponible`);
  }
}

estaDisponible("Monitor");
estaDisponible("reflector");
