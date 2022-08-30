const toggleBtn = document.querySelector(".toggleBtn");
const ul = document.querySelector("ul");

toggleBtn.addEventListener("click", () => {
    ul.classList.toggle("active")
})