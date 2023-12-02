let country = document.querySelector(".country");
let selected = document.querySelector(".selected");
let selectedIcon = document.querySelector(".selected .icon");

selected.addEventListener("click", () => {
  country.classList.toggle("active");
  selectedIcon.classList.toggle("active");
});

let item = document.querySelectorAll(".item");
let liCountry = document.querySelector(".selected h2");

item.forEach((e) => {
  e.addEventListener("click", () => {

   liCountry.innerHTML = e.innerHTML;
  country.classList.toggle("active");


  });
});
