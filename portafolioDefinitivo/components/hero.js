export function renderHero() {
  const section = document.createElement("section");
  section.id = "hero";
  section.className =
    "h-screen flex flex-col items-center text-center mt-[10%]";
  section.innerHTML = `
    <h2 class="text-4xl font-bold mb-2">¡Hola! Soy <span class="text-green-500">Alan Zalazar</span></h2>
    <p class="text-lg text-gray-300">Desarrollador Full Stack | Data Engineer</p>
    <a
      href="proyectos.html"
      class="relative z-10 mt-6 inline-block bg-lime-400 text-black font-semibold py-2 px-4 rounded hover:bg-lime-300"
    >
      Mis Proyectos
    </a>

    <img
      src="./assets/perfil.png"
      alt="Perfil"
      class="absolute bottom-0 mx-auto w-full md:max-w-[500px] z-0 pointer-events-none select-none"
    />
  `;
  return section;
}
