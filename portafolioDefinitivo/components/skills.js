import { habilidades } from "../data/habilidades.js";

export function renderSkills() {
  const section = document.createElement("section");
  section.id = "skills";
  section.className = "p-8";

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

  const categorias = [...new Set(habilidades.map((h) => h.categoria))];
  const niveles = ["Avanzado", "Intermedio", "Básico"];

  const filtros = `
    <div class="filtros w-full mb-6">
      <div class="flex flex-row gap-3 justify-center ">
        ${["nivel", "categoria"]
          .map((type) => {
            const items = type === "nivel" ? niveles : categorias;
            return `
            <div class="dropdown relative flex-1 md:flex-none md:w-48">
              <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-full w-full text-center">
                ${type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
              <div class="dropdown-menu absolute hidden bg-black bg-opacity-90 rounded-lg shadow-lg z-10 mt-1 w-full p-2 border border-slate-700">
                ${items
                  .map(
                    (i) => `
                  <button class="filtro-${type} w-full text-left px-4 py-2 hover:bg-slate-700 rounded-md" data-${type}="${i.toLowerCase()}">
                    ${i}
                  </button>`
                  )
                  .join("")}
                <button class="filtro-limpiar w-full text-left px-4 py-2 text-lime-400 hover:bg-slate-700 rounded-md mt-2">
                  Limpiar filtros
                </button>
              </div>
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;

  const cv = `
    <div class="cv w-full md:w-[90%] aspect-square grid p-4 bg-slate-800 rounded text-center justify-center items-center mx-auto">
      <h1 class="text-6xl md:text-7xl font-semibold text-green-500">4</h1>
      <p class="font-semibold md:text-5xl">Años de experiencia trabajando</p>
      <a href="./assets/curriculum.pdf" target="_blank"
         class="bg-lime-500 hover:bg-lime-700 text-black hover:text-white font-semibold py-2 px-4 rounded-full shadow w-[80%] mx-auto flex justify-center items-center md:text-lg">
        Descargar CV
      </a>
    </div>
  `;

  section.innerHTML = `
    <h3 class="text-3xl text-green-500 font-semibold mb-6 text-center">Habilidades</h3>
    ${filtros}
    <div class="md:flex gap-6 w-full">
      <div class="w-full md:w-[60%]">
        <div class="carditas grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-[90%] mx-auto">
          ${habilidades
            .map(
              (h) => `
            <div class="skill-card bg-slate-800 p-4 md:p-3 rounded-lg shadow-md text-center cursor-pointer min-h-48 md:min-h-52 transition-all duration-300 flex flex-col justify-center items-center overflow-hidden"
                 data-expanded="false"
                 data-nivel="${h.nivel.toLowerCase()}"
                 data-categoria="${h.categoria.toLowerCase()}">
              <div class="normal-view flex flex-col justify-between items-center h-full w-full">
                <img src="${h.icon}" alt="${
                h.nombre
              }" class="w-[80%] object-contain" />
                <p class="font-medium md:text-sm px-2">${h.nombre}</p>
              </div>
              <div class="expanded-view hidden flex flex-col justify-center items-center gap-2 text-lime-400 w-full h-full">
                <p class="font-bold mb-1 md:text-sm">${h.nombre}</p>
                <img src="${h.icon}" alt="${
                h.nombre
              }" class="h-16 md:h-14 mx-auto my-1 object-contain" />
                ${renderProgressBar(h.nivel)}
                <p class="text-sm">${h.categoria}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="hidden md:flex md:w-[40%] flex-col justify-center items-center">
        ${cv}
      </div>
    </div>
    <div class="md:hidden mt-6 flex justify-center items-center">
      ${cv}
    </div>
  `;

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
        currentlyExpanded
          .querySelector(".normal-view")
          .classList.remove("hidden");
        currentlyExpanded
          .querySelector(".expanded-view")
          .classList.add("hidden");
      }

      normalView.classList.add("hidden");
      expandedView.classList.remove("hidden");
      currentlyExpanded = card;
    });
  });

  section.querySelectorAll(".dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".dropdown-menu");
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".dropdown-menu").forEach((m) => {
        if (m !== menu) m.classList.add("hidden");
      });
      menu.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", () => {
    section.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.add("hidden");
    });
  });

  section.querySelectorAll(".filtro-nivel").forEach((button) => {
    button.addEventListener("click", () => {
      const nivel = button.dataset.nivel;

      section.querySelectorAll(".skill-card").forEach((card) => {
        const cardNivel = card.dataset.nivel;

        if (cardNivel === nivel) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Filtro por categoría
  section.querySelectorAll(".filtro-categoria").forEach((button) => {
    button.addEventListener("click", () => {
      const categoria = button.dataset.categoria;

      section.querySelectorAll(".skill-card").forEach((card) => {
        const cardCategoria = card.dataset.categoria;

        if (cardCategoria === categoria) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  section.querySelectorAll(".filtro-limpiar").forEach((button) => {
    button.addEventListener("click", () => {
      section.querySelectorAll(".skill-card").forEach((card) => {
        card.classList.remove("hidden");
      });
    });
  });

  return section;
}
