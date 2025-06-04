let repetir = true;

while (repetir) {
  let num = prompt(`          CALCULADORA GEOMETRICA
        Elige una figura para calcular su Area:
        1. cuadrado ---------->(escribe el numero 1)
        2. rectangulo --------->(escribir el numero 2)
        3. triangulo ----------->(escribir el numero 3)`);

  let numRefor = num.toLowerCase();

  switch (numRefor) {
    case "1":
    case "cuadrado": {
      alert("¡Genial, haz elegido un cuadrado, vamos a calcular su area!");

      let lado;
      do {
        lado = parseFloat(
          prompt(`Ingrese la medida de uno de los lados del cuadrado (en cm).`)
        );
        if (isNaN(lado)) {
          alert("Por favor, ingrese un valor numerico");
        }
      } while (isNaN(lado));

      let areaCuadrado = lado * lado;
      alert(`Perfecto, el area de su Cuadrado es de: ${areaCuadrado}cm`);
      repetir = false;
      break;
    }

    case "2":
    case "rectangulo": {
      alert("¡Genial, haz elegido un rectángulo, vamos a calcular su area!");

      let baseRectangulo;
      do {
        baseRectangulo = parseFloat(
          prompt(`Ingrese la medida de su Base (en cm).`)
        );
        if (isNaN(baseRectangulo)) {
          alert("Por favor, ingrese un valor numerico la Base.");
        }
      } while (isNaN(baseRectangulo));

      let alturaRectangulo;
      do {
        alturaRectangulo = parseFloat(
          prompt("Ingrese la medida de su Altura (en cm).")
        );
        if (isNaN(alturaRectangulo)) {
          alert("Por favor, ingrese un valor numérico para la altura.");
        }
      } while (isNaN(alturaRectangulo));

      let areaRectangulo = baseRectangulo * alturaRectangulo;
      alert(`Perfecto, el area de su Rectangulo es de: ${areaRectangulo}cm²`);
      repetir = false;
      break;
    }

    case "3":
    case "triangulo": {
      alert("¡Genial, haz elegido un triangulo, vamos a calcular su area!");
      let baseTriangulo;
      do {
        baseTriangulo = parseFloat(
          prompt(`Ingrese la medida de su Base (en cm).`)
        );
        if (isNaN(baseTriangulo)) {
          alert("Por favor, ingrese un valor numerico");
        }
      } while (isNaN(baseTriangulo));

      let alturaTriangulo;
      do {
        alturaTriangulo = parseFloat(
          prompt(`Ingrese la medida de su Altura (en cm).`)
        );
        if (isNaN(alturaTriangulo)) {
          alert("Por favor, ingrese un valor numerico");
        }
      } while (isNaN(alturaTriangulo));

      let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
      alert(`Perfecto, el area de su Triangulo es de: ${areaTriangulo}cm`);
      repetir = false;
      break;
    }

    default:
      alert("ingrese alguno de los datos solicitados ¡POR FAVOR!");
  }
}
