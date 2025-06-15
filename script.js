window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".baner-button");

  buttons.forEach((btn, index) => {
    btn.style.animation = `button-load-animation 1s ease-out forwards`;
    btn.style.animationDelay = `${index * 0.5}s`;
   
  });
 
});


