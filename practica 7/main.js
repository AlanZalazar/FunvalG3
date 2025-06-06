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

console.log("1️⃣ Recorrer y mostrar productos y precios (forEach)");
productos.forEach((e) => {
  console.log(`${e.nombre}: $${e.precio}.00`);
});

console.log(
  "2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)"
);

let nombreProductos = productos.map((e) => e.nombre);
console.log(nombreProductos);

function estaDisponible(nombre) {
  let productosLower = nombreProductos.map((e) => e.toLowerCase());
  if (productosLower.includes(nombre.toLowerCase())) {
    console.log(`El producto ${nombre} se encuentra disponible`);
  } else {
    console.log(`El producto ${nombre} no está disponible`);
  }
}
estaDisponible("monitor");
estaDisponible("reflector");

console.log("3️⃣ Aplicar un descuento a los productos (map)");

let productosDescuento = productos.map((e) => {
  return {
    nombre: e.nombre,
    precio: e.precio * 0.9,
  };
});
console.log(productosDescuento);

console.log("4️⃣ Filtrar productos por precio (filter)");

let menorA100 = productos.filter((e) => e.precio < 100);
console.log(menorA100);

console.log("5️⃣ Obtener los primeros productos (slice)");

let dosPrimeros = productos.slice(0, 2);
console.log(dosPrimeros);

console.log("6️⃣ Ordenar productos por precio (sort)");
let productosOrdenadosPorPrecio = [...productos].sort(
  (a, b) => a.precio - b.precio
);
console.log(productosOrdenadosPorPrecio);

console.log("7️⃣ Invertir el orden de los productos (reverse)");
let productosInvertidos = [...productos].reverse();
console.log(productosInvertidos);
