gsap.to(".card", {
    duration: 2,
    opacity: 1,
    scale: 1,
    onComplete: () => {
        gsap.to(".card", {
            y: 20,
            duration: 3,
            rotate: 30,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(".card", {
                    rotate: 60,
                    y: 0,
                    duration: 1,
                    scale: 0.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                });
            },
        });
    },
});
