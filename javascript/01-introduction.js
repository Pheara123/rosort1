const navbar = document.getElementById("navbar");

window.onscroll = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    const valuescroll = 120;

    if(window.scrollY > valuescroll){
        navbar.style.backgroundColor = " #353935";
        navbar.style.transition = "0.5s";

    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "0.5s";
    }
};
document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const navBrand = document.getElementById("navBrand");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const contactButton = document.getElementById("contactButton");

    if (window.scrollY > 50) {
        navbar.classList.add("bg-dark");
        navBrand.style.color = "#C0C0C0";
        navLinks.forEach((link) => {
            link.style.color = "#C0C0C0";
        });
        contactButton.classList.replace("btn-outline-light", "btn-outline-dark");
    } else {
        navbar.classList.remove("bg-dark");
        navBrand.style.color = "";
        navLinks.forEach((link) => {
            link.style.color = "";
        });
        contactButton.classList.replace("btn-outline-dark", "btn-outline-light");
    }
});
