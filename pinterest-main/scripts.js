document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
