import { gsap } from "gsap";

export function initMotion(): void {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.defaults({ ease: "power2.out", duration: 0.5 });
    if (document.querySelector(".ascii-wordmark")) {
      gsap.from(".ascii-wordmark", { autoAlpha: 0, y: 18, duration: 0.7 });
    }
    if (document.querySelector(".terminal")) {
      gsap.from(".terminal", { autoAlpha: 0, y: 20, duration: 0.6, delay: 0.12 });
    }
    const sections = gsap.utils.toArray("section.wrap:not(.hero)").filter((section) => section instanceof Element);
    if (sections.length > 0) {
      gsap.from(sections, {
        autoAlpha: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.55,
        delay: 0.18
      });
    }
  });
}
