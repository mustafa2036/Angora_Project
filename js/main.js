let Navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if(window.scrollY > 0){
        Navbar.classList.add('active')
    }
    else{
        Navbar.classList.remove('active')
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    speed:2000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
AOS.init();

$(document).ready(function () {
    $(".lds-ring").fadeOut(4000, () => {
        $("#landing").fadeOut(1000 , () => {
            $("body").css("overflow-y" , 'auto');
        });
    })
});