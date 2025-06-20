async function fetchUsers() {
  const container = document.querySelector(".users-container");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Respuesta no válida del servidor");
    }

    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow p-5 border border-gray-200 transition hover:scale-105 duration-200";

      card.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-2 py-2">${user.name}</h3>
        <p class="text-gray-600"><span class="font-semibold text-black">Usuario:</span> ${user.username}</p>
        <p class="text-gray-600"><span class="font-semibold text-black">Email:</span> ${user.email}</p>
        <p class="text-gray-600"><span class="font-semibold text-black">Tel:</span> ${user.phone}</p>
        <p class="text-gray-600"><span class="font-semibold text-black">Empresa:</span> ${user.company.name}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    const errorMessage = document.createElement("div");
    errorMessage.className =
      "col-span-full text-center text-red-600 font-semibold text-lg";
    errorMessage.textContent =
      "Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
    container.appendChild(errorMessage);
  }
}

fetchUsers();
