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


window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  const content = document.getElementById("content");
  const stats = document.getElementById("stats_container");
  const howToStart = document.getElementById("how_to_get_started");

  if (window.scrollY > 60) {
    content.style.animation = "load_content 1s forwards";
   
    if(window.scrollY > 100)
    {
       content.classList.add("visible");
    }
    if (window.scrollY > 450) {
      
      stats.style.animation = "load_stats 1s forwards";

      if(window.scrollY > 500)
      {
        stats.classList.add("visible");
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        nav.style.boxShadow = "none";
        
        if (window.scrollY > 1050) 
        {
          howToStart.style.animation = "load_how_to_start 1s forwards";
          
          if(window.scrollY > 1250)
          {
            howToStart.classList.add("visible");
          }
        }
        else
        {
          howToStart.style.animation = "none";
        }
      }
    } 
    else {
      nav.style.backgroundColor = "transparent";
      nav.style.color = "white";
      nav.style.boxShadow = "0px 0px 1px 0px";
    }
  } 
});
