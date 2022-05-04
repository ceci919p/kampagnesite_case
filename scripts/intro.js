"use strict";

/* gsap.registerPlugin(ScrollTrigger); */

window.addEventListener("DOMContentLoaded", start);

function start() {
  revealIntro();
}

function revealIntro() {
  gsap.to(".proposition1", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 65%",
    },
  });

  gsap.to(".proposition2", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 65%",
    },
  });
}
