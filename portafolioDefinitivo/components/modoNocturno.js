export function renderModoNocturno() {
  // Crear el contenedor del botón
  const button = document.createElement("button");
  button.id = "theme-toggle";
  button.className = "p-2 rounded-lg hover:bg-slate-700 focus:outline-none";
  button.setAttribute("aria-label", "Cambiar modo nocturno/diurno");

  // Agregar iconos (Font Awesome)
  button.innerHTML = `
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun hidden"></i>
  `;

  // Lógica del tema
  const setTheme = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    button.querySelector(".fa-moon").classList.toggle("hidden", !isDark);
    button.querySelector(".fa-sun").classList.toggle("hidden", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Inicializar tema
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  setTheme(savedTheme === "dark");

  // Evento click
  button.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    setTheme(isDark);
  });

  return button;
}
