const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dynamic Project Loader
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio built with HTML, CSS, and JavaScript.",
  },
  {
    title: "Business Landing Page",
    description:
      "A responsive landing page for a startup with animations and contact form.",
  },
  {
    title: "E-Commerce Template",
    description:
      "Product listing and cart UI design for a fashion e-commerce store.",
  },
];

const projectList = document.getElementById("project-list");
projects.forEach((project) => {
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectList.appendChild(div);
});

// Contact Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "!");
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
