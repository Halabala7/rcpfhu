


let lastScrollY = window.scrollY;
let ticking = false;


function handleScroll() {
  const currentScroll = window.scrollY;

  // tylko jeśli przesunięcie zmieniło się znacząco
  if (Math.abs(currentScroll - lastScrollY) > 50) {
    updateUIBasedOnScroll(currentScroll);
    lastScrollY = currentScroll;
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});


function updateUIBasedOnScroll(currentScroll)
 {
  const nav = document.getElementById("navbar");
  const content = document.getElementById("content");
  const stats = document.getElementById("stats_container");
  const howToStart = document.getElementById("how_to_get_started");

  if (currentScroll > 50) {
    content.style.animation = "load_content 1s forwards";

    if (currentScroll > 100) {
      content.classList.add("visible");
    }

    if (currentScroll > 450) {
      stats.style.animation = "load_content 1s forwards";

      if (currentScroll > 500) {
        stats.classList.add("visible");
        nav.classList.add("scrolled"); 

        if (currentScroll > 1050) {
          howToStart.style.animation = "load_content 1s forwards";

          if (currentScroll > 1250) {
            howToStart.classList.add("visible");
          }
        } else {
          howToStart.style.animation = "none";
        }
      }
    } else {
      nav.classList.remove("scrolled");
    }
  } else {
    nav.classList.remove("scrolled");
  }
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

