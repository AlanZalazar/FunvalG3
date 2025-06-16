export function renderNavbar() {
  const nav = document.createElement("nav");
  nav.className =
    "relative bg-slate-900 p-4 flex justify-between sticky top-0 z-50";
  nav.innerHTML = `
    <div class="justify-center items-center">
      <a href="#hero">
        <span class="text-cyan-500 border border-red-600 rounded-full align-text-bottom px-2.5 p-1">A</span>
        <span class="text-red-600 ml-[-25px] border border-cyan-600 align-text-top rounded-full px-2.5 p-1">Z</span>
      </a>
    </div>

    <ul class="gap-6 hidden md:flex">
      <li><a class="hover:text-green-500 transition" href="#about">Sobre mí</a></li>
      <li><a class="hover:text-green-500 transition"href="#skills">Habilidades</a></li>
      <li><a class="hover:text-green-500 transition"href="#project">Proyectos</a></li>
    </ul>

    <div class="border rounded-2xl justify-center items-center hidden md:flex">
      <a class="px-2 hover:text-green-500 transition" href="#contact">Contacto</a>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="flecha-contacto border rounded-full bg-green-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>

    <button id="menuToggle" class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="size-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <ul id="mobileMenu" class="hidden absolute right-0 top-full flex-col text-white w-[60%] items-center text-center bg-black bg-opacity-70 backdrop-blur-md shadow-lg p-4 rounded-b-md rounded-2xl">
      <li class="hover:bg-green-500 active:bg-green-500 hover:text-black transition p-2 rounded-2xl"><a href="#about" class="block w-full">Sobre mí</a></li>
      <li class="hover:bg-green-500 active:bg-green-500 hover:text-black transition p-2 rounded-2xl"><a href="#skills" class="block w-full">Habilidades</a></li>
      <li class="hover:bg-green-500 active:bg-green-500 hover:text-black transition p-2 rounded-2xl"><a href="#project" class="block w-full">Proyectos</a></li>
      <li class="hover:bg-green-500 active:bg-green-500 hover:text-black transition p-2 rounded-2xl"><a href="#contact" class="block w-full">Contacto</a></li>
    </ul>
  `;

  setTimeout(() => {
    const toggleBtn = nav.querySelector("#menuToggle");
    const menu = nav.querySelector("#mobileMenu");
    const links = menu.querySelectorAll("a");

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("hidden");
    });

    // Cierra al hacer click fuera del menú
    document.addEventListener("click", (e) => {
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnToggle = toggleBtn.contains(e.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        menu.classList.add("hidden");
      }
    });

    // Cierra al hacer click en cualquier link del menú
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }, 0);

  return nav;
}
