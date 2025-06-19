function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}

function renderizarTodo(cliente, elemento) {
  elemento.innerHTML += `
  <div class="border-2 border-blue-500 m-2 w-[300px] h-[150px] ">
  <h1 class=" text-center ">${cliente.nombre}</h1>
  <p>Edad: ${cliente.edad}</p>
  <p>Email: ${cliente.correo}</p>
  <p>Compras: ${cliente.compras}</p>
  </div>
  `;
}

export { suma, resta, multiplicacion, division, renderizar, renderizarTodo };
