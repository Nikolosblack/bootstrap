const nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Nav hide
const navBar = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Owl Carousel
$('.owl-carousel').owlCarousel({
    item:4,
    loop:true,
    nav: false,
    autoplay:true,
    autoplaytimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})