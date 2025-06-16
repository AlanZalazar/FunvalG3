export function renderNavbarMobile() {
  const navMobile = document.createElement("nav");
  navMobile.className =
    "flex md:hidden bg-slate-900 p-4 justify-between items-center sticky top-0 z-50 shadow text-white";

  navMobile.innerHTML = `
    <div>
      <a href="#hero">
        <span class="text-cyan-500 border border-red-600 rounded-full px-2.5 p-1">A</span>
        <span class="text-red-600 ml-[-25px] border border-cyan-600 rounded-full px-2.5 p-1">Z</span>
      </a>
    </div>

    <button id="menuToggle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 24 24" stroke-width="1.5" 
        stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" 
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <ul id="mobileMenu" class="hidden absolute top-16 left-0 w-full bg-slate-800 flex-col text-white gap-4 p-4">
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#project">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  `;

  // Interacción JS: abrir/cerrar el menú
  setTimeout(() => {
    const toggleBtn = navMobile.querySelector("#menuToggle");
    const menu = navMobile.querySelector("#mobileMenu");

    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Opcional: cerrar si hacés click fuera
    document.addEventListener("click", (e) => {
      if (!navMobile.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });
  }, 0);

  return navMobile;
}
