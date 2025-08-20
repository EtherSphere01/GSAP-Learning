import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        button.classList.add("show");
    }
});
