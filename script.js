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

document.querySelectorAll('.links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 🚨 stop browser hash jump

    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // remove hash from URL
    history.replaceState(null, "", window.location.pathname);

    // close menu if needed
    navLinks.classList.remove("active");
    document.body.style.overflow = "";
  });
});
