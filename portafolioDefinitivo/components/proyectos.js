import { proyectos } from "../data/proyectos.js";

export function renderProyectos() {
  const section = document.createElement("section");
  section.id = "project";
  section.className = "p-8";
  section.innerHTML = `
    <h2 class="text-3xl font-bold mb-6 text-center text-green-500">Proyectos</h2>
    <div id="proyectos-container" class="grid grid-cols-1 md:grid-cols-3 max-w-6xl gap-6 mx-auto">
      ${proyectos
        .map(
          (p) => `
        <a href="${p.url || "#"}" target="_blank">
          <div class="bg-lime-200 p-4 rounded shadow hover:scale-105 transition text-center">
            <h4 class="font-bold text-xl mb-2 text-black">${p.titulo}</h4>
            <p class="text-black">${p.descripcion}</p>
            <img src="${
              p.img
            }" class="h-32 object-cover mx-auto mt-4 rounded" />
          </div>
        </a>
      `
        )
        .join("")}
    </div>
  `;
  return section;
}
