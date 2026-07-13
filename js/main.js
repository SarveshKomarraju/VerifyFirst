const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 25){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const menuButton = document.querySelector(".mobile-toggle");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});