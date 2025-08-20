import gsap from "gsap";

gsap.from(".card", {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.2,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
        from: "start",
        grid: "auto",
    },
});
