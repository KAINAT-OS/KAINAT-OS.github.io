(function () {
  const toggle = document.getElementById("theme-toggle-btn");
  const htmlEl = document.documentElement;
  // On load, check localStorage for a saved theme
  const saved = localStorage.getItem("kainat-theme");
  if (saved === "dark") {
    htmlEl.setAttribute("data-theme", "dark");
  } else {
    htmlEl.setAttribute("data-theme", "light");
  }

  function switchTheme() {
    const current = htmlEl.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", next);
    localStorage.setItem("kainat-theme", next);
    toggle.textContent = next === "dark" ? "☀️ Light" : "🌙 Dark";
  }

  // Initialize button text
  if (saved === "dark") {
    toggle.textContent = "☀️ Light";
  } else {
    toggle.textContent = "🌙 Dark";
  }

  toggle.addEventListener("click", switchTheme);
})();
