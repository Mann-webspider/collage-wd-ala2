gsap.registerPlugin(ScrollTrigger);

// apply parallax effect to any element with a data-speed attribute
gsap.to(".box", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0
  }
});
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#box3",
      start: "bottom top",
      end: "bottom top",
      scrub: true,
      
      id: "scrub"
    } ,
    scrollTrigger: {
      trigger: "#box1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      
      id: "scrub"
    } 
  })
tl.to("#box3", {
    duration: 5,
    x: 400,
    rotation: 45,
  })
tl.to("#box1", {
    duration: 1.5,
    scale:1.5
  })