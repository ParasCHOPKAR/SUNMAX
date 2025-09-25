// Sidebar toggle
const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

burger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  burger.classList.toggle("active");
});

// Dropdown toggle inside sidebar
const dropdowns = document.querySelectorAll(".sidebar .dropdown > a");
dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = drop.parentElement;
    parent.classList.toggle("active");
  });
});






// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// About Section
gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Company Section
gsap.from(".company-col.left", {
  scrollTrigger: {
    trigger: ".company-section",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".company-col.right", {
  scrollTrigger: {
    trigger: ".company-section",
    start: "top 80%"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Why Solar Section (staggered)
gsap.from(".why-col", {
  scrollTrigger: {
    trigger: ".why-section",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});


////////////////////// TESTIMONIAL /////////////////////


////////////// IMPACT .///////////////
// ==== COUNTER ANIMATION ====
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

/////////////////////     Tesimonial  /////////////
