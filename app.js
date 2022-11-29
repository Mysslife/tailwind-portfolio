const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll('#hLink');
const body = document.querySelector('body');
const moonBtn = document.querySelector("#moon")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

links.forEach(link => link.addEventListener('click', () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
}))

moonBtn.addEventListener('click', () => {
  body.classList.toggle("dark");
})