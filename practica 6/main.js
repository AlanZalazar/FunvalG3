let saldo = 0;

function actualizarSaldo() {
  document.getElementById("saldo").textContent = saldo.toFixed(2);
}

function mostrarMensaje(texto, esError = false) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.color = esError ? "red" : "green";
}

function ingresarDinero() {
  const monto = parseFloat(document.getElementById("monto").value);
  if (isNaN(monto) || monto <= 0) {
    mostrarMensaje("Ingrese un monto válido", true);
    return;
  }
  saldo += monto;
  actualizarSaldo();
  mostrarMensaje("Depósito exitoso");
}

function retirarDinero() {
  const monto = parseFloat(document.getElementById("monto").value);
  if (isNaN(monto) || monto <= 0) {
    mostrarMensaje("Ingrese un monto válido", true);
    return;
  }
  if (monto > saldo) {
    mostrarMensaje("Saldo insuficiente", true);
    return;
  }
  saldo -= monto;
  actualizarSaldo();
  mostrarMensaje("Retiro exitoso");
}
