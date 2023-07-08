import gsap from "gsap";

const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();
  tl.to(position, {
    x: !isMobile ? -4 : -7.0,
    y: !isMobile ? -8 : -12.02,
    z: !isMobile ? -6 : -6.0,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  }).to(target, {
    x: !isMobile ? 1.52 : 0.7,
    y: !isMobile ? 1.02 : 1.9,
    z: !isMobile ? -1.52 : 0.7,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
  });
  tl.to(position, {
    x: !isMobile ? 1.56 : 9.36,
    y: !isMobile ? 5.0 : 10.95,
    z: !isMobile ? 0.01 : 0.09,
    scrollTrigger: {
      trigger: ".display-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  }).to(target, {
    x: !isMobile ? 0 : -1.62,
    y: !isMobile ? -5 : 0.02,
    z: !isMobile ? -0.0 : -0.06,
    scrollTrigger: {
      trigger: ".display-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
  });
};

export default scrollAnimation;
