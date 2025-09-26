document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#typed-text")) {
    var typed = new Typed("#typed-text", {
      strings: ["I'm Student", "I'm Photographer", "I'm Designer", "I'm Programmer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
});

const filterButtons = document.querySelectorAll("[data-filter]");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });
  });
});

  window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    setTimeout(() => {
      loading.classList.add("hide");
    }, 500);
  });