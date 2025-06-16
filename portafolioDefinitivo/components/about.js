export function renderAbout() {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "p-8 text-center";
  section.innerHTML = `
  <div class="style-about">
    <h3 class="style-about text-3xl font-bold mb-4 text-green-500">¿Quien soy?</h3>
    <p class="style-about max-w-2xl mx-auto text-gray-300 md:my-[6%] md:text-2xl md:py-[200px]">
        Soy Alan, desarrollador en formación con conocimientos en fullstack y
        actualmente enfocado en frontend. Vengo del área técnica
        (electromecánica) y encontré en la programación una forma de crear,
        automatizar y dar vida a ideas que antes solo imaginaba. <br />
        Me apasiona todo lo relacionado con la tecnología, desde la inteligencia
        artificial hasta la automatización del hogar. Disfruto aprender,
        experimentar y mejorar constantemente. Aunque a veces dudo de mí mismo,
        sé que con trabajo y dedicación puedo convertirme en un gran aporte para
        cualquier equipo. <br />
        Este portafolio es parte de ese camino.
      </p>
      <div class="style-about">
      <a
        href="proyectos.html"
        class="mt-6 inline-block bg-lime-400 text-black font-semibold py-2 px-4 rounded-2xl hover:bg-lime-300 "
      >
        Ver Proyectos
      </a>
      </div>
      </div>
      
  `;
  return section;
}
