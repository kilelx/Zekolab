const header = document.querySelector("header");
const burgerToggle = document.querySelector("#toggle-burger");;
const animLis = document.querySelectorAll("header .navbar_content > li");

burgerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    animLis.forEach(li => {
        li.classList.toggle("run-transition");
    });
});