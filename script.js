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

const images = ["images/HeroBg.jpg", "images/HeroBg2.jpg"];

images.forEach((src) => {
  const img = new Image();
  img.src = src; // forces browser to load & cache
});
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

// Contact section
// Initialize EmailJS
emailjs.init("ItwcPnzp33zLoylGV");

const form = document.getElementById("formContainer");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Custom validation
  inputs.forEach((input) => {
    const error = input.nextElementSibling; // <small class="error">
    if (input.value.trim() === "") {
      error.textContent = `${input.placeholder.replace("*", "")} is required`;
      isValid = false;
    } else {
      error.textContent = "";
    }
  });

  if (!isValid) return; // stop if invalid

  // Send email via EmailJS
  emailjs.sendForm("service_nf26lb2", "template_76nwt7e", form).then(
    () => {
      alert("Message sent successfully!");
      form.reset();
    },
    (error) => {
      console.error(error);
      alert("Failed to send message 😢");
    }
  );
});

// FAQ section
const fqas = document.querySelectorAll(".fqa");

fqas.forEach((fqa) => {
  const question = fqa.querySelector(".question");

  question.addEventListener("click", () => {
    // Close all other FAQs
    fqas.forEach((other) => {
      if (other !== fqa) {
        other.classList.remove("active");
      }
    });

    // Toggle the clicked FAQ
    fqa.classList.toggle("active");
  });
});
