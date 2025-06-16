import { validateForm } from "../utils/validateForm.js";

export function renderContact() {
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "p-8 flex flex-col justify-center items-center";

  section.innerHTML = `
    <h3 class="text-4xl font-semibold mb-6 text-green-500">Contacto</h3>
    <form id="contactForm" class="flex flex-col gap-6 w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
      <h1 class="text-black text-2xl font-bold text-center p-4">Deja tu mensaje</h1>
      <input name="nombre" type="text" placeholder="Nombre:" class="input-form p-4 rounded border text-lg" required>
      <input name="email" type="email" placeholder="Email:" class="input-form p-4 rounded border text-lg" required>
      <textarea name="mensaje" rows="5" placeholder="Mensaje..." class="input-form p-4 rounded border text-lg" required></textarea>
      <button type="submit" class="bg-lime-500 hover:bg-lime-700 text-black hover:text-white font-bold p-3 rounded-2xl text-lg transition">Enviar</button>
    </form>
    <div id="modalOverlay" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 hidden flex items-center justify-center">
      <div id="modalContent" class="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-xl relative"></div>
    </div>
  `;

  const modal = section.querySelector("#modalOverlay");
  const modalContent = section.querySelector("#modalContent");

  section.querySelector("#contactForm").addEventListener("click", (e) => {
    if (e.target.type === "submit") return;

    modalContent.innerHTML = `
      <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">×</button>
      ${section.querySelector("#contactForm").outerHTML}
    `;

    modal.classList.remove("hidden");
    modalContent.querySelector("input")?.focus();

    const clonedForm = modalContent.querySelector("form");
    clonedForm.id = "contactFormModal";

    clonedForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!validateForm(clonedForm)) return;

      modalContent.innerHTML = `
        <div class="text-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500 mx-auto mb-4"></div>
          <p class="text-lg">Enviando tu mensaje...</p>
        </div>
      `;

      try {
        const formData = new FormData(clonedForm);
        const response = await fetch("https://formspree.io/f/mzzggkrd", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        modalContent.innerHTML = response.ok
          ? `
          <div class="text-center py-8">
            <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 class="text-2xl font-bold text-green-500 mb-2">¡Mensaje enviado!</h3>
            <p class="text-lg">Te responderemos pronto.</p>
            <button id="closeSuccess" class="mt-4 bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition">
              Cerrar
            </button>
          </div>
        `
          : `
          <div class="text-center py-8">
            <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <h3 class="text-2xl font-bold text-red-500 mb-2">Error al enviar</h3>
            <p class="text-lg mb-4">Por favor inténtalo de nuevo.</p>
            <button id="closeError" class="mt-4 bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition">
              Reintentar
            </button>
          </div>
        `;

        if (response.ok) section.querySelector("#contactForm").reset();
      } catch (error) {
        console.error(error);
      }
    });
  });

  // Eventos para cerrar el modal
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.closest("#closeModal") ||
      e.target.closest("#closeSuccess") ||
      e.target.closest("#closeError")
    ) {
      modal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.add("hidden");
  });

  return section;
}
