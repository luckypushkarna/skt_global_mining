import { gsap } from "gsap";

// We can register plugins here if needed in the future
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// Ensure smooth performance
gsap.config({
  autoSleep: 60,
  force3D: true, // GPU acceleration for transforms
  nullTargetWarn: false,
});

export default gsap;
