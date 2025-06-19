export class ControladorCPU {
  constructor(casillas, esTurnoX, verificarVictoria, hayEmpate) {
    this.casillas = casillas;
    this.esTurnoX = esTurnoX;
    this.verificarVictoria = verificarVictoria;
    this.hayEmpate = hayEmpate;
    this.tiempoJugada = 1000; // 1 segundo de "pensamiento"
  }

  async jugar() {
    const jugadaGanadora = this.encontrarJugada("active-o");
    if (jugadaGanadora !== -1) return await this.realizarJugada(jugadaGanadora);

    const jugadaBloqueo = this.encontrarJugada("active-x");
    if (jugadaBloqueo !== -1) return await this.realizarJugada(jugadaBloqueo);

    return await this.jugadaEstrategica();
  }

  encontrarJugada(clase) {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const linea of lineasGanadoras) {
      const [a, b, c] = linea;
      const casillasLinea = [
        this.casillas[a],
        this.casillas[b],
        this.casillas[c],
      ];
      const conteo = casillasLinea.filter((c) =>
        c.classList.contains(clase)
      ).length;

      if (conteo === 2) {
        const casillaVacia = casillasLinea.find(
          (c) =>
            !c.classList.contains("active-x") &&
            !c.classList.contains("active-o")
        );
        if (casillaVacia) return [...this.casillas].indexOf(casillaVacia);
      }
    }
    return -1;
  }

  async jugadaEstrategica() {
    const prioridades = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (const index of prioridades) {
      if (
        !this.casillas[index].classList.contains("active-x") &&
        !this.casillas[index].classList.contains("active-o")
      ) {
        return await this.realizarJugada(index);
      }
    }
  }

  realizarJugada(index) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(index); // devolvés el índice, no tocás el DOM
      }, this.tiempoJugada);
    });
  }
}
