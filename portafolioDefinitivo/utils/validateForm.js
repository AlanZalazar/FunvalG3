//export function validateForm(nombre, email, mensaje) {
//  return nombre.trim() !== "" && email.trim() !== "" && mensaje.trim() !== "";
//}
//
//
//Archivo: /utils/validateForm.js

export function validateForm(form) {
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Todos los campos son obligatorios.");
    return false;
  }
  return true;
}
