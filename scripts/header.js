"use strict";

window.addEventListener("DOMContentLoaded", loaded);

let subheading = document.querySelector(".subheading");
let h1 = document.querySelector("h1");
let header_p = document.querySelector(".header_text");
let zeppeliner = document.querySelector(".zeppeliner");

function loaded() {
  textAnimation();
}

function textAnimation() {
  var tl = gsap.timeline();

  tl.from(".zeppeliner", {
    x: 400,
    opacity: 0,
    duration: 1.2,
    stagger: { amount: 1 },
    ease: "power3.out",
  });

  tl.from("h1", {
    x: 400,
    opacity: 0,
    duration: 1,
    stagger: { amount: 1 },
    ease: "power2.out",
  });

  tl.from(".subheading", {
    x: 400,
    opacity: 0,
    duration: 1.3,
    delay: 0.3,
    stagger: { amount: 1 },
  });

  tl.from(".header_text", {
    /*    x: 400, */
    opacity: 0,
    duration: 1,
    delay: 0,
    stagger: { amount: 1 },
    ease: "expo.out",
  });
}
