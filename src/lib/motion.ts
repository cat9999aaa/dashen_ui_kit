import { gsap } from "gsap";

export function initMotion(): void {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.defaults({ ease: "power2.out", duration: 0.5 });
    gsap.from(".ascii-wordmark", { autoAlpha: 0, y: 18, duration: 0.7 });
    gsap.from(".terminal", { autoAlpha: 0, y: 20, duration: 0.6, delay: 0.12 });
    gsap.from("section.wrap:not(.hero)", {
      autoAlpha: 0,
      y: 24,
      stagger: 0.08,
      duration: 0.55,
      delay: 0.18
    });
  });
}
