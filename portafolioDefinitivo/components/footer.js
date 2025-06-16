export function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "text-center p-4 bg-slate-800 mt-8";
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Alan Zalazar</p>
  `;
  return footer;
}
