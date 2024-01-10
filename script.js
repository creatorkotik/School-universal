gsap.registerPlugin(ScrollTrigger);
gsap.from(".header__top", {
  duration: 1,
  y: "-100%",
  opacity: 0,
});

gsap.from(".header__text", {
  duration: 1,
  y: "100%",
  opacity: 0,
  delay: 1,
});

gsap.from(".header__title", {
  duration: 1,
  y: "100%",
  opacity: 0,
  delay: 2,
});

gsap.from(".header__subtitle", {
  duration: 1,
  y: "100%",
  opacity: 0,
  delay: 3,
});

gsap.from(".header__btn-2", {
  duration: 1,
  y: "100%",
  opacity: 0,
  delay: 4,
});

gsap.from(".pack__item", {
  duration: 1,
  x: "100%",
  opacity: 0,
  scrollTrigger: ".pack__body",
  stagger: 0.5,
});

gsap.from(".educ__block", {
  duration: 1,
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".educ__body",
});

gsap.from(".educ__info", {
  duration: 1,
  x: "100%",
  opacity: 0,
  scrollTrigger: ".educ__body",
});

gsap.from(".vid__top", {
  duration: 1,
  y: "-100%",
  opacity: 0,
  scrollTrigger: ".vid__body",
  stagger: 0.5,
});

gsap.from(".vid__bottom", {
  duration: 1,
  y: "100%",
  opacity: 0,
  scrollTrigger: ".vid__body",
  stagger: 0.5,
});

gsap.from(".teach__item", {
  duration: 1,
  scale: 0,
  scrollTrigger: ".teach__body",
  stagger: 0.5,
});

gsap.from(".cours__item-left", {
  duration: 1,
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".cours__body",
  stagger: 0.5,
});
gsap.from(".cours__item-right", {
  duration: 1,
  x: "100%",
  opacity: 0,
  scrollTrigger: ".cours__body",
  stagger: 0.5,
});

gsap.from(".form__body", {
  duration: 1,
  y: "-100%",
  opacity: 0,
  scrollTrigger: ".form__body",
});

gsap.from(".about__item", {
  duration: 1,
  x: "100%",
  opacity: 0,
  scrollTrigger: ".about__body",
  stagger: 0.5,
});
