const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

openBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({ behavior: "smooth" });
});