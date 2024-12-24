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