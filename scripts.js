const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
     isOpen ? "fa fa-close" : "fa fa-bars" //toggle nav-meu
  )
});

navLinks.addEventListener("click", (e) =>{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa fa-bars")
});

const scrollRevealOption = {
distance: "50px",
origin: "bottom",
duration: 1000,
};

//this is header container

ScrollReveal().reveal(".header-content h1",{
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content .section-description",{
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content .header-btn",{
  ...scrollRevealOption,
  delay: 1000,
});


// about conatiner

ScrollReveal().reveal(".about-content .section-header",{
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about-content .section-description",{
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .about-btn",{
  ...scrollRevealOption,
  delay: 1000,
});

//product container

ScrollReveal().reveal(".products-card",{
  ...scrollRevealOption,
  interval: 500,
});


//article container

ScrollReveal().reveal(".article-card",{
  ...scrollRevealOption,
  interval: 500,
});




