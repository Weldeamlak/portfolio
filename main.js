document.addEventListener("DOMContentLoaded", () => {
  // ========== Contact Form Validation ==========
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    const emailPIN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePIN = /^[A-Za-z\s\/-]+$/;

    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return;
    }

    if (!namePIN.test(name)) {
      status.textContent = "Name can only contain letters, spaces, hyphens (-), or slashes (/).";
      status.style.color = "red";
      return;
    }

    if (!emailPIN.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.style.color = "red";
      return;
    }

    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "green";

    document.getElementById("contact-form").reset();
  });

  // ========== Input Glow Effect ==========
  const fields = document.querySelectorAll("#contact-form input, #contact-form textarea");
  const status = document.getElementById("formStatus");

  fields.forEach(field => {
    field.addEventListener("input", () => {
      status.textContent = "";
      field.style.boxShadow = "0 0 15px #0ff, 0 0 30px #0ff";
      setTimeout(() => {
        field.style.boxShadow = "0 0 5px #0ff, 0 0 10px #0ff";
      }, 300);
    });
  });

  // ========== Project Data ==========
  const projects = [
    {
      title: "Calculator",
      description: "A simple calculator built with HTML, CSS, and JavaScript.",
      image: "clac.png",
      link: "#"
    },
    {
      title: "Weather App",
      description: "Get real-time weather using APIs and responsive UI.",
      image: "images/project2.jpg",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio built using HTML, CSS, and animations.",
      image: "images/project3.jpg",
      link: "#"
    },
    {
      title: "calculater",
      description: "Create and manage your tasks effectively.",
      image: "clac.png",
      link: "#"
    },
    {
      title: "Typing Speed Test",
      description: "Track your typing speed in real-time.",
      image: "clac.png",
      link: "#"
    }
  ];

  // ========== Render Projects ==========
  function renderProjects() {
    const container = document.getElementById("projects-container");
    const viewMoreButton = document.getElementById("toggle-projects");
    let isExpanded = false;

    function displayProjects(list) {
      container.innerHTML = "";
      list.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";
        link.classList.add("btn");

        card.append(img, title, desc, link);
        container.appendChild(card);
      });
    }

    // Show initial 2 projects
    displayProjects(projects.slice(-2));

    if (projects.length > 2) {
      viewMoreButton.style.display = "inline-block";

      viewMoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (!isExpanded) {
          displayProjects(projects);
          viewMoreButton.textContent = "Show Less";
          isExpanded = true;
        } else {
          displayProjects(projects.slice(-2));
          viewMoreButton.textContent = "View More";
          isExpanded = false;
        }
      });
    }
  }

  renderProjects();

  // ========== Mobile Nav Toggle ==========
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
      document.body.classList.toggle("nav-open");
    });
  }
});
