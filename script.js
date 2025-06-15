window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".baner-button");
  const stats = document.getElementById("stats");
  
  buttons.forEach((button, i) => {
    setTimeout(function()
    {
      setTimeout(() => 
      {
        button.classList.add("loaded");
        button.style.opacity = "1";
        
        button.addEventListener("animationend", () => {
        button.classList.remove("loaded");
        stats.style.animation = "stats-animation 4s";
        stats.style.display = "flex";  
      }, { once: true });
        
    }, i * 300);
    
      
     
    },1000); 
    
      
  });

  
 
});


