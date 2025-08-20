import gsap from "gsap";

gsap.to(".box", {
    x: 200,
    y: 80,
    opacity: 1,
    rotation: 360,
    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
    borderRadius: "50%",
    scale: 1,
    duration: 2,
    ease: "bounce",
    flex: 1,
});
