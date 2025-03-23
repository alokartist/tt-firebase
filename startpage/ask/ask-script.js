document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});
(function() {
    function devToolsOpen() {
        debugger;
    }
    setInterval(devToolsOpen, 100);
})();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        slidesOffsetBefore: 50,
        spaceBetween: 0,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
menuAnimation()
loaderAnimation()

function redirectToReact() {
    // Redirect to the React app's settings route
    window.location.href = "/setting"; // Adjust the path if necessary
}