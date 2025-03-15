export function setTheme() {
  const isDark =
    localStorage.getItem("theme") == "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  console.log(isDark);

  document.documentElement.classList.toggle("dark", isDark);
}
