document.getElementById("year").textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

if (saved === "light") document.body.classList.add("light");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});
