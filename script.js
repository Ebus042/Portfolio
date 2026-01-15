const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navTopLinks");
const closeBtn = document.getElementById("close");
const links = document.querySelectorAll(".links li");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  document.body.style.overflow = "";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    document.body.style.overflow = "";
  });
});

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    document.body.style.overflow = "";
  }
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  history.replaceState(null, "", window.location.pathname);
});

// Hero Section Image
const heroImages = document.getElementById("heroImgs");

const images = ["images/heroBg.jpg", "images/heroBg2.jpg"];
let currentIndex = 0;

function changeBackround() {
  heroImages.classList.remove("animate");
  void heroImages.offsetWidth;

  heroImages.style.background = `
    linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
    url("${images[currentIndex]}") center/cover no-repeat
  `;
  heroImages.classList.add("animate");
  currentIndex = (currentIndex + 1) % images.length;
}
changeBackround();
setInterval(changeBackround, 4000);

// Sections scrolling in on view port
const allSections = document.querySelectorAll(".onViewPort");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  }
);
allSections.forEach((section) => observer.observe(section));
