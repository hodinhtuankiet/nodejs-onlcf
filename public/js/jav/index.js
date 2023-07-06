document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



// const loginLink = document.getElementById('login-link');

// loginLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = loginLink.href;
// });

function redirectTofb() {
    window.location.href = "https://www.facebook.com/profile.php?id=100080159688790";
}
function redirectToinsta() {
    window.location.href = "./login.html";
}
function redirectTozalo() {
    window.location.href = "./login.html";
}

function redirectToLoginPage() {
    window.location.href = "/login";
}
function redirectToAdminPage() {
    window.location.href = "/admin";
}

// script for video home(slide navigation )

// const bun = document.querySelectorAll(".nav-btn");
// const slide = document.querySelectorAll(".video-slide");

// var sliderNav = function (manual) {
//     bun.forEach((btn) => {
//         btn.classList.remove("active");
//     });

//     slide.forEach((slide) => {
//         slide.classList.remove("active");
//     });

//     bun[manual].classList.add("active");
//     slide[manual].classList.add("active");
// }

// bun.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         sliderNav(i);
//     });
// });

