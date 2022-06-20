const header = document.querySelector("header");
const burgerToggle = document.querySelector("#toggle-burger");
const heroSection = document.querySelector(".hero-content");
// const animLis = document.querySelectorAll("header .navbar_content > li");

console.log(header.offsetHeight);

burgerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    heroSection.style.paddingTop = `${header.offsetHeight}px`;
    // animLis.forEach(li => {
    //     li.classList.toggle("run-transition");
    // });
});