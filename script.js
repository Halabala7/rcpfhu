document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const content = document.getElementById("content");
  const stats = document.getElementById("stats_container");
  const howToStart = document.getElementById("how_to_get_started");
  const steps = document.querySelectorAll(".tutorial_steps");
  const graphStats = document.querySelectorAll(".graph_stats");
  const progressCircle = document.querySelectorAll(".progress_circle");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -300px 0px", // uruchamia 150px przed dolną krawędzią viewportu
    threshold: 0
  };

  // CONTENT
  const contentObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        content.classList.add("visible");
        observer.unobserve(entry.target); // tylko raz
      }
    });
  }, observerOptions);
  contentObserver.observe(content);

  // STATS
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.classList.add("visible");
        nav.classList.add("scrolled");

        graphStats.forEach(el => el.classList.add("animated"));
        circleProgress(progressCircle);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  statsObserver.observe(stats);

  // HOW TO START
  const howToStartObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        howToStart.classList.add("visible");
        steps.forEach((step, index) => {
          setTimeout(() => {
            step.classList.add("visible");
          }, index * 500); // co 300 ms
        });
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  if (howToStart) {
    howToStartObserver.observe(howToStart);
  }
});

function circleProgress(progressCircle) {
  progressCircle.forEach(circle => {
    const targetOffset = parseFloat(circle.getAttribute("stroke-dashoffset"));
    const text = circle.parentElement.querySelector("text");
    const percentage = parseInt(circle.getAttribute("data-progress")); 

    circle.style.setProperty("--circle-offset", targetOffset);
    circle.classList.add("progress_animation");

    let newPercentage = 0;
    const step = () => {
      if (newPercentage <= percentage) {
        text.textContent = `${newPercentage}%`;
        newPercentage++;
        setTimeout(step, 1000 / percentage); 
      }
    };
    step();
  });
}



const toggle = document.getElementById("themeToggle");

// Sprawdź, czy użytkownik ma ustawiony dark mode systemowo
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Jeśli nic nie ustawiono, użyj ustawienia systemowego
if (!localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  toggle.checked = prefersDark;
} else {
  const savedTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggle.checked = savedTheme === "dark";
}

// Zmieniaj motyw po kliknięciu w switch
toggle.addEventListener("change", () => {
  const newTheme = toggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

