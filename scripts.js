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

scrollReveal().reveal(".header-content h1",{
  ...scrollRevealOption,
});

scrollReveal().reveal(".header-content .section-description",{
  ...scrollRevealOption,
  delay: 500
});

scrollReveal().reveal(".header-content .header-btn",{
  ...scrollRevealOption,
  delay: 1000,
});


// about conatiner

scrollReveal().reveal(".about-content .section-header",{
  ...scrollRevealOption,
});

scrollReveal().reveal(".about-content .section-description",{
  ...scrollRevealOption,
  delay: 500
});

scrollReveal().reveal(".about-content .about-btn",{
  ...scrollRevealOption,
  delay: 1000,
});




