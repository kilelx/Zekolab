const header = document.querySelector("header");
const burgerToggle = document.querySelector("#toggle-burger");
const heroSection = document.querySelector(".hero-content");
// const animLis = document.querySelectorAll("header .navbar_content > li");

const headerHeight = header.offsetHeight;
console.log(headerHeight);

burgerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    heroSection.style.paddingTop = `10.7rem`;
    if (!header.classList.contains("active")) {
        heroSection.style.paddingTop = "5rem";
        document.querySelector("body").style.overflow = 'hidden';
        console.log("Stop scroll");
    }
});