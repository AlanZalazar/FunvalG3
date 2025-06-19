import { traerDatosDogs } from "./data.js";

let breedsData = {};
let currentBreed = "";
let currentSubbreed = "";

traerDatosDogs().then((data) => {
  breedsData = data;
});

const contenedor = document.querySelector("#contenedor");
const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const searchContainer = document.getElementById("search");

// Crear contenedor para subrazas
const subbreedsContainer = document.createElement("div");
subbreedsContainer.id = "subbreeds-container";
subbreedsContainer.className = "w-[50%] mt-4 hidden";
searchContainer.after(subbreedsContainer);

// Función para mostrar imágenes
const displayDogs = (images, titlePrefix = "") => {
  contenedor.innerHTML = "";
  images.slice(0, 10).forEach((img, i) => {
    contenedor.innerHTML += `
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
      <img class="object-cover w-full rounded-t-lg h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="${img}" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${titlePrefix} perrito ${
      i + 1
    }</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
      </div>
    </a>
    `;
  });
};

// Función para cargar subrazas
const loadSubbreeds = (breed) => {
  const subbreeds = breedsData[breed];
  const subbreedsResults = document.getElementById("subbreeds-results");
  const subbreedsImages = document.getElementById("subbreeds-images");

  if (subbreeds && subbreeds.length > 0) {
    subbreedsContainer.innerHTML = `
      <select id="subbreed-select" class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Ver subrazas...</option>
        ${subbreeds
          .map((sub) => `<option value="${sub}">${sub}</option>`)
          .join("")}
      </select>
    `;
    subbreedsContainer.classList.remove("hidden");

    document
      .getElementById("subbreed-select")
      .addEventListener("change", (e) => {
        currentSubbreed = e.target.value;
        if (currentSubbreed) {
          fetch(
            `https://dog.ceo/api/breed/${currentBreed}/${currentSubbreed}/images`
          )
            .then((res) => res.json())
            .then((data) => {
              subbreedsImages.innerHTML = "";
              data.message.slice(0, 10).forEach((img, i) => {
                subbreedsImages.innerHTML += `
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <img class="object-cover w-full h-44 rounded-lg" src="${img}" alt="">
                  <h5 class="mt-2 text-lg font-bold">${currentBreed} ${currentSubbreed} ${
                  i + 1
                }</h5>
                </div>
              `;
              });
              subbreedsResults.classList.remove("hidden");
            });
        } else {
          subbreedsResults.classList.add("hidden");
        }
      });
  } else {
    subbreedsContainer.classList.add("hidden");
    subbreedsResults.classList.add("hidden");
  }
};

// Buscador principal
input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  dropdown.innerHTML = "";

  if (query) {
    const filtered = Object.keys(breedsData).filter((breed) =>
      breed.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      dropdown.classList.remove("hidden");
      filtered.forEach((breed) => {
        const div = document.createElement("div");
        div.textContent = breed;
        div.className = "px-4 py-2 cursor-pointer hover:bg-blue-100";
        div.addEventListener("click", () => {
          input.value = breed;
          currentBreed = breed;
          dropdown.classList.add("hidden");

          fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then((res) => res.json())
            .then((data) => {
              displayDogs(data.message, breed);
              loadSubbreeds(breed);
            });
        });
        dropdown.appendChild(div);
      });
    } else {
      dropdown.classList.add("hidden");
    }
  } else {
    dropdown.classList.add("hidden");
  }
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener("click", function (event) {
  if (!event.target.closest(".relative")) {
    dropdown.classList.add("hidden");
  }
});

// Carga inicial de perros aleatorios
for (let i = 1; i <= 10; i++) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      contenedor.innerHTML += `
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
        <img class="object-cover w-full rounded-t-lg h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="${data.message}" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">perrito bonito ${i}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">adopta un perrito hoy :D</p>
        </div>
      </a>
      `;
    });
}
