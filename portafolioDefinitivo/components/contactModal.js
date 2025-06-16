export function renderContactModal() {
  const modalWrapper = document.createElement("div");
  modalWrapper.className = `
    fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center
  `;
  modalWrapper.innerHTML = `
    <div class="bg-white rounded-2xl p-8 max-w-xl w-full shadow-xl relative">
      <button id="closeModal" class="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-red-600">&times;</button>
      <h3 class="text-4xl font-semibold mb-6 text-green-500 text-center">Contacto</h3>
      <form action="https://formspree.io/f/mnqkwzbg" method="POST" id="contactForm" class="flex flex-col gap-6">
        <input name="nombre" type="text" placeholder="Nombre:" class="p-4 rounded border text-lg" required>
        <input name="email" type="email" placeholder="Email:" class="p-4 rounded border text-lg" required>
        <textarea name="mensaje" rows="5" placeholder="Mensaje..." class="p-4 rounded border text-lg" required></textarea>
        <button type="submit" class="bg-lime-500 hover:bg-lime-700 text-black hover:text-white font-bold p-3 rounded-2xl text-lg transition">Enviar</button>
        <p id="successMessage" class="text-green-600 text-center font-bold hidden">¡Gracias por tu mensaje! Te responderé pronto.</p>
      </form>
    </div>
  `;

  setTimeout(() => {
    const closeBtn = modalWrapper.querySelector("#closeModal");
    const form = modalWrapper.querySelector("#contactForm");
    const message = modalWrapper.querySelector("#successMessage");

    closeBtn.addEventListener("click", () => modalWrapper.remove());

    // Cierre al click fuera del modal
    modalWrapper.addEventListener("click", (e) => {
      if (e.target === modalWrapper) modalWrapper.remove();
    });

    // Mostrar mensaje de éxito sin salir
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        message.classList.remove("hidden");
        setTimeout(() => {
          modalWrapper.remove();
        }, 3000); // cierra el modal en 3 segundos
      }
    });
  }, 0);

  return modalWrapper;
}
