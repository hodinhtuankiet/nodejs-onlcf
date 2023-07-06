let showDrinks = {
    coffee: [
        {
            id: 1,
            location: "https://amazingcoffee.vn/ca-phe-den-black-coffee.html",
            name: "Coffee Black",
            ratings: "img\rating\Star rating 4 of 5.png.png",
            price: 19000,
            condiment: asdasd,
            img: "img/drink_menu/cafe1.png",
            tag: 1
        },
        {
            id: 2,
            name: "Coffee Milk",
            subName: "Coffee",
            price: 25000,
            img: "img/drink_menu/cafe2.png",
            tag: 1
        },
        {
            id: 3,
            name: "Regular Coffee",
            subName: "Coffee",
            price: 17000,
            img: "img/drink_menu/cafe3.png",
            tag: 1
        },
        {
            id: 4,
            name: "Cheese Coffee",
            subName: "Coffee",
            price: 28000,
            img: "img/drink_menu/cafe4.png",
            tag: 1
        },
        {
            id: 5,
            name: "Snow Coffee",
            subName: "Coffee",
            price: 39000,
            img: "img/drink_menu/cafe5.png",
            tag: 1
        },
        {
            id: 6,
            name: "Mocha Coffee",
            subName: "Coffee",
            price: 40000,
            img: "img/drink_menu/cafe6.png",
            tag: 1
        },
        {
            id: 7,
            name: "Flat White Coffee",
            subName: "Coffee",
            price: 45000,
            img: "img/drink_menu/cafe7.png",
            tag: 1
        },
        {
            id: 8,
            name: "Siliver Fainting",
            subName: "Coffee",
            price: 30000,
            img: "img/drink_menu/cafe8.png",
            tag: 1
        },
        {
            id: 9,
            name: "Smoked Ice",
            subName: "Coffee",
            price: 39000,
            img: "img/drink_menu/cafe9.png",
            tag: 1
        },
        {
            id: 10,
            name: "Snow Coffee",
            subName: "Coffee",
            price: 39000,
            img: "img/drink_menu/cafe10.png",
            tag: 1
        },
    ],
}
let isNotNull = false;
const form = document.querySelector('.container_coffee');
const hover = document.querySelector('.box__item-img');
const click = document.querySelector('.icon__close-history');
hover.addEventListener('click', () => {
    form.style.display = 'none';
    // document.body.style.overflow = 'hidden';
})

hover.addEventListener('click', () => {
    form.style.display = 'block';
    document.body.style.overflow = 'hidden';
})


