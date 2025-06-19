import { ControladorCPU } from "./cpu.js";

const configScreen = document.getElementById("config");
const gameScreen = document.getElementById("tateti");
const optionX = document.querySelector(".option-equis");
const optionO = document.querySelector(".option-circulo");
const btnVsCPU = document.querySelector(".tecla-juego-cpu");
const btnVsPlayer = document.querySelector(".tecla-juego-jugador");
const btnVsCPUDificil = document.querySelector(".tecla-juego-cpu-dificil");

const cells = document.querySelectorAll(".casilla");
const turnIndicator = document.querySelector(".turno");
const playerScore = document.querySelector(".tu");
const tieScore = document.querySelector(".empate");
const cpuScore = document.querySelector(".cpu");
const restartBtn = document.querySelector(".rehacer");
const modalX = document.getElementById("modal-x");
const modalO = document.getElementById("modal-o");
const modalTie = document.getElementById("empate");
const modalRestart = document.getElementById("reiniciar");
const newRoundBtns = document.querySelectorAll(".nueva-partida");
const exitBtns = document.querySelectorAll(".salir");
const cancelBtn = document.querySelector(".cancelar");
const confirmRestartBtn = document.querySelector(".aceptar-reiniciar");
const equisIcon = document.getElementById("equis-icon");
const circuloIcon = document.getElementById("circulo-icon");

let currentPlayer = "X";
let gameMode = "";
let player1Symbol = "";
let player2Symbol = "";
let board = Array(9).fill("");
let scores = { player1: 0, ties: 0, player2: 0 };
let gameActive = true;

function initGame() {
  player1Symbol = "O";
  player2Symbol = "X";

  // ✅ Simular selección visual del botón círculo
  optionO.style.backgroundColor = "#ABBECA";
  optionX.style.backgroundColor = "#1a2b33";

  equisIcon.classList.remove("equis-oscuro");
  equisIcon.classList.add("equis-clara");

  circuloIcon.classList.remove("circulo-claro");
  circuloIcon.classList.add("circulo-oscuro");

  configScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  [modalX, modalO, modalTie, modalRestart].forEach((m) =>
    m.classList.add("hidden")
  );
  board = Array(9).fill("");
  cells.forEach((cell) => {
    cell.classList.remove("active-x", "active-o", "ficha-ganadora");
    cell.style.backgroundColor = "";
  });
  updateScoresDisplay();
}

// Selección de símbolo
optionX.addEventListener("click", () => {
  player1Symbol = "X";
  player2Symbol = "O";

  optionX.style.backgroundColor = "#ABBECA";
  optionO.style.backgroundColor = "#1a2b33";

  equisIcon.classList.remove("equis-clara");
  equisIcon.classList.add("equis-oscuro");

  circuloIcon.classList.remove("circulo-oscuro");
  circuloIcon.classList.add("circulo-claro");
});

optionO.addEventListener("click", () => {
  player1Symbol = "O";
  player2Symbol = "X";

  optionO.style.backgroundColor = "#ABBECA";
  optionX.style.backgroundColor = "#1a2b33";

  equisIcon.classList.remove("equis-oscuro");
  equisIcon.classList.add("equis-clara");

  circuloIcon.classList.remove("circulo-claro");
  circuloIcon.classList.add("circulo-oscuro");
});

// Selección de modo
btnVsCPU.addEventListener("click", () => {
  if (!player1Symbol) return;
  gameMode = "cpu";
  startGame();
});

btnVsPlayer.addEventListener("click", () => {
  if (!player1Symbol) return;
  gameMode = "player";
  startGame();
});

btnVsCPUDificil.addEventListener("click", () => {
  if (!player1Symbol) return;
  gameMode = "cpu-dificil";
  startGame();
});

function startGame() {
  configScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  currentPlayer = "X";
  gameActive = true;
  updateTurnDisplay();

  if (
    (gameMode === "cpu" || gameMode === "cpu-dificil") &&
    player1Symbol === "O"
  ) {
    setTimeout(cpuMove, 500);
  }
}

function updateTurnDisplay() {
  if (!gameActive) return;
  turnIndicator.textContent = `Turno: ${currentPlayer}`;
  turnIndicator.style.color = currentPlayer === "X" ? "#31C4BE" : "#F2B236";
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});

async function handleCellClick(index) {
  if (!gameActive || board[index] !== "") return;

  const isPlayerTurn =
    currentPlayer === player1Symbol ||
    (gameMode === "player" && currentPlayer === player2Symbol);

  if (!isPlayerTurn) return;

  makeMove(index, currentPlayer);

  const winner = checkWinner();
  if (winner) {
    await endGame(winner);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnDisplay();

  if (
    (gameMode === "cpu" || gameMode === "cpu-dificil") &&
    currentPlayer === player2Symbol &&
    gameActive
  ) {
    setTimeout(cpuMove, 500);
  }
}

function makeMove(index, player) {
  board[index] = player;
  cells[index].classList.add(player === "X" ? "active-x" : "active-o");
}

async function cpuMove() {
  console.log("CPU juega como", player2Symbol, "Turno:", currentPlayer);

  if (!gameActive) return;

  if (gameMode === "cpu-dificil") {
    const controlador = new ControladorCPU(
      cells,
      currentPlayer === "X",
      checkWinner,
      () => !board.includes("")
    );
    const index = await controlador.jugar();

    if (index !== undefined) {
      makeMove(index, currentPlayer);
    }

    // Sincronizar el tablero
    cells.forEach((cell, i) => {
      if (
        cell.classList.contains(`active-${player2Symbol.toLowerCase()}`) &&
        board[i] === ""
      ) {
        board[i] = player2Symbol;
      }
    });
  } else {
    const emptyCells = board
      .map((cell, idx) => (cell === "" ? idx : null))
      .filter((i) => i !== null);
    const randomIndex =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    makeMove(randomIndex, currentPlayer);
  }

  const winner = checkWinner();
  if (winner) {
    await endGame(winner);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnDisplay();
}

function encontrarLineaGanadora(simbolo) {
  const patrones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const linea of patrones) {
    const [a, b, c] = linea;
    if (board[a] === simbolo && board[b] === simbolo && board[c] === simbolo) {
      return linea;
    }
  }
  return null;
}

function checkWinner() {
  const line = encontrarLineaGanadora(currentPlayer);
  if (line) return currentPlayer;
  return board.includes("") ? null : "tie";
}

async function endGame(winner) {
  gameActive = false;

  if (winner === "tie") {
    scores.ties++;
    updateScoresDisplay();
    await new Promise((res) => setTimeout(res, 300));
    modalTie.classList.remove("hidden");
    return;
  }

  const ganadora = encontrarLineaGanadora(winner);
  if (ganadora) {
    ganadora.forEach((index) => {
      cells[index].classList.add("ficha-ganadora");
      cells[index].style.backgroundColor =
        winner === "X" ? "#31c4be" : "#f2b236";
    });
  }

  await new Promise((res) => setTimeout(res, 600));

  if (winner === player1Symbol) {
    scores.player1++;
    (winner === "X" ? modalX : modalO).classList.remove("hidden");
  } else {
    scores.player2++;
    (winner === "X" ? modalX : modalO).classList.remove("hidden");
  }

  updateScoresDisplay();
}

function updateScoresDisplay() {
  if (gameMode === "cpu" || gameMode === "cpu-dificil") {
    playerScore.innerHTML = `
      <div>Jugador (${player1Symbol})</div>
      <div class="text-2xl font-bold">${scores.player1}</div>
    `;
    cpuScore.innerHTML = `
      <div>CPU (${player2Symbol})</div>
      <div class="text-2xl font-bold">${scores.player2}</div>
    `;
  } else {
    playerScore.innerHTML = `
      <div>Jugador X</div>
      <div class="text-2xl font-bold">${
        player1Symbol === "X" ? scores.player1 : scores.player2
      }</div>
    `;
    cpuScore.innerHTML = `
      <div>Jugador O</div>
      <div class="text-2xl font-bold">${
        player1Symbol === "O" ? scores.player1 : scores.player2
      }</div>
    `;
  }

  tieScore.innerHTML = `
    <div>Empates</div>
    <div class="text-2xl font-bold">${scores.ties}</div>
  `;
}

// Reinicio
restartBtn.addEventListener("click", () =>
  modalRestart.classList.remove("hidden")
);
cancelBtn.addEventListener("click", () => modalRestart.classList.add("hidden"));
confirmRestartBtn.addEventListener("click", () => {
  modalRestart.classList.add("hidden");
  resetGame();
});

newRoundBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    [modalX, modalO, modalTie].forEach((m) => m.classList.add("hidden"));
    resetGame();
  });
});

exitBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    [modalX, modalO, modalTie, modalRestart].forEach((m) =>
      m.classList.add("hidden")
    );
    initGame();
  });
});

function resetGame() {
  board = Array(9).fill("");
  cells.forEach((cell) => {
    cell.classList.remove("active-x", "active-o", "ficha-ganadora");
    cell.style.backgroundColor = "";
  });
  currentPlayer = "X";
  gameActive = true;
  updateTurnDisplay();

  if (
    (gameMode === "cpu" || gameMode === "cpu-dificil") &&
    player1Symbol === "O"
  ) {
    setTimeout(cpuMove, 500);
  }
}

initGame();
