import { habilidades } from "../data/habilidades.js";

export function renderSkills() {
  const section = document.createElement("section");
  section.id = "skills";
  section.className = "p-8";

  // Función para generar la barra de progreso SVG
  const renderProgressBar = (nivel) => {
    const levels = {
      avanzado: 90,
      intermedio: 60,
      básico: 30,
    };

    const percentage = levels[nivel.toLowerCase()] || 30;

    return `
      <div class="w-full px-2 mt-2">
        <svg width="100%" height="8" viewBox="0 0 100 8" class="progress-bar">
          <rect width="100" height="6" rx="3" ry="3" fill="#334155"/>
          <rect width="${percentage}" height="6" rx="3" ry="3" fill="#84cc16">
            <animate attributeName="width" from="0" to="${percentage}" dur="0.5s" fill="freeze"/>
          </rect>
        </svg>
        <p class="text-xs text-slate-300 mt-1">${nivel}</p>
      </div>
    `;
  };

  // Obtener categorías y niveles únicos para los filtros
  const categorias = [...new Set(habilidades.map((h) => h.categoria))];
  const niveles = ["Avanzado", "Intermedio", "Básico"];

  // Crear elementos de filtro (sin flechas)
  const filtros = `
    <div class="filtros mb-6 md:mb-0 w-full">
      <div class="flex flex-wrap gap-2 justify-center md:flex-col md:gap-3">
        <div class="dropdown relative w-full">
          <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-full w-full text-center md:text-left">
            Nivel
          </button>
          <div class="dropdown-menu absolute hidden bg-black bg-opacity-90 rounded-lg shadow-lg z-10 mt-1 w-full p-2 border border-slate-700">
            ${niveles
              .map(
                (nivel) => `
              <button class="filtro-nivel w-full text-left px-4 py-2 hover:bg-slate-700 rounded-md" data-nivel="${nivel.toLowerCase()}">
                ${nivel}
              </button>
            `
              )
              .join("")}
            <button class="filtro-limpiar w-full text-left px-4 py-2 text-lime-400 hover:bg-slate-700 rounded-md mt-2">
              Limpiar filtros
            </button>
          </div>
        </div>
        
        <div class="dropdown relative w-full">
          <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-full w-full text-center md:text-left">
            Categoría
          </button>
          <div class="dropdown-menu absolute hidden bg-black bg-opacity-90 rounded-lg shadow-lg z-10 mt-1 w-full p-2 border border-slate-700">
            ${categorias
              .map(
                (cat) => `
              <button class="filtro-categoria w-full text-left px-4 py-2 hover:bg-slate-700 rounded-md" data-categoria="${cat}">
                ${cat}
              </button>
            `
              )
              .join("")}
            <button class="filtro-limpiar w-full text-left px-4 py-2 text-lime-400 hover:bg-slate-700 rounded-md mt-2">
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const cv = `
    <div class="cv w-full md:w-[90%] aspect-square md:aspect-[1/1.2] grid p-4 bg-slate-800 rounded text-center mx-auto">
      <h1 class="text-6xl md:text-7xl font-semibold text-green-500">4</h1>
      <p class="font-semibold md:text-lg">Años de experiencia trabajando</p>
      <a
        href="./assets/curriculum.pdf"
        target="_blank"
        class="bg-lime-500 hover:bg-lime-700 text-black hover:text-white font-semibold py-2 px-4 rounded-full shadow w-[80%] mx-auto flex justify-center items-center md:text-lg"
      >
        Descargar CV
      </a>
    </div>
  `;

  section.innerHTML = `
    <h3 class="text-3xl text-green-500 font-semibold mb-4 text-center p-8">Habilidades</h3>
    
    <!-- Filtros para móvil (arriba de todo) -->
    <div class="block w-full">
      ${filtros}
    </div>
    
    <div class="md:flex gap-6 items-start w-full">
      <div class="w-full md:w-[60%]">
        <div class="carditas grid grid-cols-2 md:grid-cols-4 gap-4 w-[80%] mx-auto">
          ${habilidades
            .map(
              (h) => `
            <div class="skill-card bg-slate-800 p-3 md:p-2 rounded-lg shadow-md text-center cursor-pointer h-40 md:h-32 flex flex-col justify-center items-center" 
                 data-expanded="false"
                 data-nivel="${h.nivel.toLowerCase()}" 
                 data-categoria="${h.categoria}">
              <div class="normal-view justify-between gap-8">
                <img src="${h.icon}" alt="${
                h.nombre
              }" class="h-10 md:h-8 mx-auto mb-2" />
                <p class="font-medium md:text-sm">${h.nombre}</p>
              </div>
              <div class="expanded-view hidden flex flex-col justify-center items-center gap-2 text-lime-400 w-full">
                <p class="font-bold mb-1 md:text-sm">${h.nombre}</p>
                <img src="${h.icon}" alt="${
                h.nombre
              }" class="h-16 md:h-12 mx-auto my-1" />
                ${renderProgressBar(h.nivel)}
                <p class="text-sm">${h.categoria}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <!-- Contenedor para filtros y CV en desktop -->
      <div class="w-full md:w-[40%] mt-4 flex flex-col items-center gap-6">
        <!-- Filtros para desktop (arriba del CV) -->
        <div class="hidden md:block w-full">
          ${filtros}
        </div>
        ${cv}
      </div>
    </div>
  `;

  // Manejar el click en las cards
  let currentlyExpanded = null;

  section.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("click", () => {
      const normalView = card.querySelector(".normal-view");
      const expandedView = card.querySelector(".expanded-view");

      if (card === currentlyExpanded) {
        normalView.classList.remove("hidden");
        expandedView.classList.add("hidden");
        currentlyExpanded = null;
        return;
      }

      if (currentlyExpanded) {
        const prevNormal = currentlyExpanded.querySelector(".normal-view");
        const prevExpanded = currentlyExpanded.querySelector(".expanded-view");
        prevNormal.classList.remove("hidden");
        prevExpanded.classList.add("hidden");
      }

      normalView.classList.add("hidden");
      expandedView.classList.remove("hidden");
      currentlyExpanded = card;
    });
  });

  // Manejar dropdowns
  section.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      // Cerrar otros dropdowns abiertos
      document.querySelectorAll(".dropdown-menu").forEach((m) => {
        if (m !== menu) m.classList.add("hidden");
      });
      menu.classList.toggle("hidden");
    });
  });

  // Cerrar dropdowns al hacer click fuera
  document.addEventListener("click", () => {
    section.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.add("hidden");
    });
  });

  // Manejar filtros
  section
    .querySelectorAll(".filtro-nivel, .filtro-categoria")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const nivel = button.dataset.nivel;
        const categoria = button.dataset.categoria;

        section.querySelectorAll(".skill-card").forEach((card) => {
          const cardNivel = card.dataset.nivel;
          const cardCategoria = card.dataset.categoria;

          if (
            (nivel && cardNivel.includes(nivel)) ||
            (categoria && cardCategoria === categoria)
          ) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

  // Limpiar filtros
  section.querySelectorAll(".filtro-limpiar").forEach((button) => {
    button.addEventListener("click", () => {
      section.querySelectorAll(".skill-card").forEach((card) => {
        card.classList.remove("hidden");
      });
    });
  });

  return section;
}
