const header = document.querySelector("header");
const burgerToggle = document.querySelector("#toggle-burger");
const heroSection = document.querySelector(".hero-content");
const stickyHeader = document.querySelector(".header-sticky");

burgerToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    heroSection.style.paddingTop = `10.7rem`;
    if (!header.classList.contains("active")) {
        heroSection.style.paddingTop = "5rem";
    }
});

// window.addEventListener("scroll", () => {
//     const {scrollTop, clientHeight} = document.documentElement;

//     console.log(stickyHeader);

//     if (scrollTop > clientHeight) {
//         stickyHeader.classList.remove("not-visible");
//     } else {
//         stickyHeader.classList.add("not-visible");
//     }
// })