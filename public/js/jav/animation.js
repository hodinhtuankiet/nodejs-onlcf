
const animateItems = document.querySelectorAll('.animate-item');

window.addEventListener("scroll", function () {
    animateItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.8) {
            item.classList.add("animate-item-show");
        }
    });
});


function debounce(func, wait = 15, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function checkAnimate() {
    animateItems.forEach(item => {
        const triggerPoint = (window.innerHeight / 5) * 4;
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint) {
            item.classList.add('animate-item-show');
        } else {
            item.classList.remove('animate-item-show');
        }
    });
}
window.addEventListener('scroll', debounce(checkAnimate));

// button scroll top

const scrollToTopButton = document.getElementById("scroll-to-top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.opacity = 1;
    } else {
        scrollToTopButton.style.opacity = 0;
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// scroll select menu 

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

const links = document.querySelectorAll("header a");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", smoothScroll);
}

// slider
let boxImgSpace = document.querySelector('.img__space');

let imgSpace = [
    "/img/space_shop/Rectangle46.png",
    "/img/space_shop/Rectangle47.png",
    "/img/space_shop/Rectangle48.png",
    "/img/space_shop/Rectangle49.png",
    "/img/space_shop/Rectangle50.png"
]
