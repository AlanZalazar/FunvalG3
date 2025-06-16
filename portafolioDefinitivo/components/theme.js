// theme.js
export function initTheme() {
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  }
}

export function toggleTheme() {
  const isDark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  return isDark;
}
