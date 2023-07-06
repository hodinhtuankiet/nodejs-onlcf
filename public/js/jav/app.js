// variables
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// data

let dataDrinks = {
    coffee: [
        {
            id: 1,
            name: "Coffee Black",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",
            price: 19000,
            img: "img/drink_menu/cafe1.png",
            tag: 1
        },
        {
            id: 2,
            name: "Coffee Milk",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",
            price: 25000,
            img: "img/drink_menu/cafe2.png",
            tag: 1
        },
        {
            id: 3,
            name: "Regular Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 17000,
            img: "img/drink_menu/cafe3.png",
            tag: 1
        },
        {
            id: 4,
            name: "Cheese Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 28000,
            img: "img/drink_menu/cafe4.png",
            tag: 1
        },
        {
            id: 5,
            name: "Snow Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 39000,
            img: "img/drink_menu/cafe5.png",
            tag: 1
        },
        {
            id: 6,
            name: "Mocha Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 40000,
            img: "img/drink_menu/cafe6.png",
            tag: 1
        },
        {
            id: 7,
            name: "Flat White Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 45000,
            img: "img/drink_menu/cafe7.png",
            tag: 1
        },
        {
            id: 8,
            name: "Siliver Fainting",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 30000,
            img: "img/drink_menu/cafe8.png",
            tag: 1
        },
        {
            id: 9,
            name: "Smoked Ice",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 39000,
            img: "img/drink_menu/cafe9.png",
            tag: 1
        },
        {
            id: 10,
            name: "Snow Coffee",
            subName: "Coffee",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 39000,
            img: "img/drink_menu/cafe10.png",
            tag: 1
        },
    ],

    milkTea: [
        {
            id: 1,
            name: "Black Sugar Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 25000,
            img: "img/drink_menu/ts1.png",
            tag: 2
        },

        {
            id: 2,
            name: "Matcha Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 32000,
            img: "img/drink_menu/ts2.png",
            tag: 2
        },
        {
            id: 3,
            name: "Taro Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 36000,
            img: "img/drink_menu/ts3.png",
            tag: 2
        },
        {
            id: 4,
            name: "Milk Tea Chesse",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 33000,
            img: "img/drink_menu/ts4.png",
            tag: 2
        },
        {
            id: 5,
            name: "Cocoa Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 28000,
            img: "img/drink_menu/ts5.png",
            tag: 2
        },
        {
            id: 6,
            name: "Pearl Milk Tea-1",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 30000,
            img: "img/drink_menu/ts6.png",
            tag: 2
        },
        {
            id: 7,
            name: "Pearl Milk Tea-2",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 30000,
            img: "img/drink_menu/ts7.png",
            tag: 2
        },
        {
            id: 8,
            name: "Classis Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 25000,
            img: "img/drink_menu/ts8.png",
            tag: 2
        },
        {
            id: 9,
            name: "Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 28000,
            img: "img/drink_menu/ts9.png",
            tag: 2
        },
        {
            id: 10,
            name: "3Q Milk Tea",
            subName: "Milk Tea",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 28000,
            img: "img/drink_menu/ts10.png",
            tag: 2
        },
    ],

    soda: [
        {
            id: 1,
            name: "Soda Peach",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 30000,
            img: "img/drink_menu/soda1.png",
            tag: 3
        },

        {
            id: 2,
            name: "Soda Grape",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 27000,
            img: "img/drink_menu/soda2.png",
            tag: 3
        },
        {
            id: 3,
            name: "Strawberry Soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 36000,
            img: "img/drink_menu/soda3.png",
            tag: 3
        },
        {
            id: 4,
            name: "Soda Lemon",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 28000,
            img: "img/drink_menu/soda4.png",
            tag: 3
        },
        {
            id: 5,
            name: "Soda Galaxy",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 45000,
            img: "img/drink_menu/soda5.png",
            tag: 3
        },
        {
            id: 6,
            name: "Fruit Soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 40000,
            img: "img/drink_menu/soda6.png",
            tag: 3
        },
        {
            id: 7,
            name: "Strawberry soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 43000,
            img: "img/drink_menu/soda7.png",
            tag: 3
        },
        {
            id: 8,
            name: "Fragrant Soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 39000,
            img: "img/drink_menu/soda8.png",
            tag: 3
        },
        {
            id: 9,
            name: "Guava Lychee Soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 43000,
            img: "img/drink_menu/soda9.png",
            tag: 3
        },
        {
            id: 10,
            name: "Mango Soda",
            subName: "Soda",
            content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

            price: 41000,
            img: "img/drink_menu/soda10.png",
            tag: 3
        },
    ]
}

let dataCakes = [
    {
        id: 1,
        name: "Raisin Roll Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 30000,
        img: "img/cake/banh1.png",
        tag: 4
    },

    {
        id: 2,
        name: "Sesame Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 27000,
        img: "img/cake/banh2.png",
        tag: 4
    },

    {
        id: 3,
        name: "Croissants",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 20000,
        img: "img/cake/banh3.png",
        tag: 4
    },

    {
        id: 4,
        name: "Sweet Honey Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 22000,
        img: "img/cake/banh4.png",
        tag: 4
    },

    {
        id: 5,
        name: "Strawberry Level Roll Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 45000,
        img: "img/cake/banh5.png",
        tag: 4
    },

    {
        id: 6,
        name: "Salted Egg Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 32000,
        img: "img/cake/banh6.png",
        tag: 4
    },

    {
        id: 7,
        name: "Honey Cinnamon Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 36000,
        img: "img/cake/banh7.png",
        tag: 4
    },

    {
        id: 8,
        name: "Baked Egg Cake",
        subName: "Bánh ngọt",
        content: "Coffe Latte is a popular espresso based beverage that consists of steamed milk and a shot of espresso, topped with a small amount of foam. It is known for its smooth and creamy texture and is enjoyed by coffe lovers all around the world",

        price: 42000,
        img: "img/cake/banh8.png",
        tag: 4
    },

]


let listCartData = [];

// get Element
const spaceImg = $('.img__space');
const form = $('.blur');
const statusAddCart = $('.status');
const listStatus = $('.list__status');
const closeForm = $('.icon__close-form');
const itemNavbar = $$('.item__navbar-content');
const shopCart = $('.icon__shop-header i');
const showCart = $('.cart');
const buttonBackCart = $('.button__back');
const avatarUser = $('.user__login-img');
const optionsAvatarUser = $('.user__option-login');
const optionsMenus = $$('li.option__menu-item');
const menuDrinks = $$('.list__drink');
const listDrinkCoffee = $('.list__drink-coffee');
const listDrinkMilkTea = $('.list__drink-milkTea');
const listDrinkSoda = $('.list__drink-soda');
const listCakes = $('.list__cake');
const quantity = $('.cart__quanlity span.quanlity');
const totalBill = $('.content__total-bill');
const totalMoney = $('.cart__total-content');
const numberCart = $('.quatity__cart');
const buttonBuy = $('.button__buy');
const linkCart = $('.user__item-option-cart');
const historyOrder = $('.history__order');
const closeHistoryOrder = $('.icon__close-history-order');
let listBillOrder = $('.list__order');
// variables Cart
let listCart = document.querySelector('.list__cart');
let isNotNull = false;
// app start

function app() {
    renderDrinks();
    renderCakes();

}

app();

// function render 

function renderDrinks() {
    renderDrinkCoffee();
    renderDrinkMilkTea();
    renderDrinkSoda();
}

function renderDrinkCoffee() {
    const htmls = dataDrinks.coffee.map((drink, index) => {
        return renderCoffee(drink, index);
    })
    listDrinkCoffee.innerHTML = htmls.join('');
}

function renderDrinkMilkTea() {
    const htmls = dataDrinks.milkTea.map((drink, index) => {
        return renderMilk(drink, index)
    });
    listDrinkMilkTea.innerHTML = htmls.join('');
}

function renderDrinkSoda() {
    const htmls = dataDrinks.soda.map((drink, index) => {
        return renderSoda(drink, index);
    })
    listDrinkSoda.innerHTML = htmls.join('');
}



// function render cake
function renderCakes() {
    const htmls = dataCakes.map((cake, index) => {
        return `
                             <li class="box__item cake__item">
                                <div class="box__item-img cake__item-img">
                                    <img srcset="${cake.img} 2x" alt="" class="img-drink">
                                </div>
                                <div class="box__item-content cake__item-content">
                                    <div class="box__item-info cake__item-info">
                                        <div class="item__content-name cake__content-name">${cake.name}</div>
                                        <div class="item__content-price cake__content-price">${convert(cake.price)} VNĐ</div>
                                    </div>
                                    <div class="box__item-like cake__item-like">
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div class="box__item-btn cake__item-btn">
                                    <button class="button button-add" onclick="addCart(${cake.tag}, ${index},${index + dataDrinks.coffee.length + dataDrinks.milkTea.length + dataDrinks.soda.length})">
                                        Add to cart
                                    </button>
                                </div>
                            </li>`
    })
    listCakes.innerHTML = htmls.join('')
}

// variable render
function renderCoffee(drink, index) {
    return `
        <li class="box__item drink-coffee drink__item">
            <div class="box__item-img drink__item-img">
                <img srcset="${drink.img} 2x" alt="" class="img-drink">
            </div>
            <div class="box__item-content drink__item-content">
                <div class="box__item-info drink__item-info">
                    <div class="item__content-name drink__content-name">${drink.name}</div>
                    <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
                </div>
                <div class="box__item-like drink__item-like">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="box__item-btn drink__item-btn">
                <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + 0})">
                    Add to cart
                </button>
            </div>
        </li>`
}

function renderMilk(drink, index) {
    return `
    <li class="box__item drink__item">
        <div class="box__item-img drink__item-img">
            <img srcset="${drink.img} 2x" alt="" class="img-drink">
        </div>
        <div class="box__item-content drink__item-content">
            <div class="box__item-info drink__item-info">
                <div class="item__content-name drink__content-name">${drink.name}</div>
                <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
            </div>
            <div class="box__item-like drink__item-like">
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="box__item-btn drink__item-btn">
            <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + dataDrinks.coffee.length})">
                Add to cart
            </button>
        </div>
    </li>`
}

function renderSoda(drink, index) {
    return `
    <li class="box__item drink__item">
        <div class="box__item-img drink__item-img">
            <img srcset="${drink.img} 2x" alt="" class="img-drink">
        </div>
        <div class="box__item-content drink__item-content">
            <div class="box__item-info drink__item-info">
                <div class="item__content-name drink__content-name">${drink.name}</div>
                <div class="item__content-price drink__content-price">${convert(drink.price)}</div>
            </div>
            <div class="box__item-like drink__item-like">
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="box__item-btn drink__item-btn">
            <button class="button button-add" onclick="addCart(${drink.tag}, ${index},${index + dataDrinks.coffee.length + dataDrinks.milkTea.length})">
                Add to cart
            </button>
        </div>
    </li>`
}


// function handleEvents
optionsMenus.forEach((option, index) => {
    let menuDrink = menuDrinks[index];
    option.addEventListener('click', () => {
        $('.option__menu-item.active').classList.remove('active');
        option.classList.add('active');

        $('.list__drink.active').classList.remove('active');
        menuDrink.classList.add('active');
    })
})

itemNavbar.forEach((item, index) => {
    item.addEventListener('click', () => {
        $('.item__navbar-content.active').classList.remove('active');
        item.classList.add('active');
    })
})

linkCart.addEventListener('click', () => {
    showCart.classList.add('active');
})

shopCart.addEventListener('click', () => {
    showCart.classList.add('active');
})

buttonBackCart.addEventListener('click', () => {
    showCart.classList.remove('active');
})

closeForm.addEventListener('click', () => {
    form.style.display = 'none';
    document.body.style.overflow = 'auto';
})

const bun = document.querySelectorAll(".nav-btn");
const slide = document.querySelectorAll(".video-slide");

var sliderNav = function (manual) {
    bun.forEach((btn) => {
        btn.classList.remove("active");
    });

    slide.forEach((slide) => {
        slide.classList.remove("active");
    });

    bun[manual].classList.add("active");
    slide[manual].classList.add("active");
}
bun.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

closeHistoryOrder.addEventListener('click', () => {
    historyOrder.style.display = 'none';
})

function openHistoryOrder() {
    historyOrder.style.display = 'block';
}


var currentSlide = 0;
var slideInterval = setInterval(next, 3000);
var slides = document.querySelectorAll('.img__space');

function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    $('.img__space.active').classList.remove('active');
    slides[currentSlide].classList.add('active');
}

function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    $('.img__space.active').classList.remove('active');
    slides[currentSlide].classList.add('active');

}

// function handle addCart

function addCart(tag, indexData, indexList) {
    if (tag == 1) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.coffee[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 2) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.milkTea[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 3) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataDrinks.soda[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    } else if (tag == 4) {
        if (listCartData[indexList] == null) {
            listCartData[indexList] = dataCakes[indexData];
            listCartData[indexList].quantity = 1;
            listCartData[indexList].ID__LIST = indexList;
        }
    }

    statusAddCart.style.display = 'block';
    let status = document.createElement('li');
    status.classList.add('item__status');
    status.innerHTML = `
                        <div class="item__status-container">
                            <h3>THÊM SẢN PHẨM THÀNH CÔNG</h3>
                            <div class="icon__success">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="item__status-message">
                                “Bạn đã thêm sản phẩm vào giỏ hàng <i class="fa-solid fa-cart-shopping"></i>”
                            </div>
                        </div>`
    listStatus.appendChild(status);
    removeStatus(status);
    resetCart();
}

function removeStatus(status) {
    setTimeout(() => {
        listStatus.removeChild(status);
    }, 1000);
}

function settingQuantity(idList, quantity) {
    listCartData[idList].quantity = quantity;
    if (quantity <= 0) {
        delete listCartData[idList]
        resetCart();
    }
    resetCart();
}

function removeCart(idList) {
    delete listCartData[idList];
    resetCart();
}


function resetCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let resultPrice = 0;
    quantity.innerHTML = 0;
    numberCart.innerHTML = 0;
    totalBill.innerHTML = 0 + " VNĐ";
    totalMoney.innerHTML = 0 + " VNĐ";
    listCartData.forEach((item, index) => {
        if (item != null) {
            console.log(item);
            count += item.quantity;
            totalPrice += item.price * item.quantity;
            resultPrice = totalPrice + 15000;
            let newDiv = document.createElement('div');
            newDiv.classList.add('item__cart');
            newDiv.innerHTML = `
                            <div class="item__cart-content">
                                <div class="item__cart-img">
                                    <img srcset="${item.img} 2x" alt="">
                                </div>
                                <div class="item__cart-info">
                                    <div class="cart__info-name">${item.name}</div>
                                    <div class="cart__info-subname">${item.subName}</div>
                                    <div class="cart__info-price">${convert(item.price)} VNĐ</div>
                                </div>
                            </div>
                            <div class="setting__quantily">
                                <div class="setting__quantily-btn">
                                    <button class="button__quantily-down" onclick="settingQuantity(${item.ID__LIST}, ${item.quantity - 1})">-</button>
                                    <div class="number__quantily">${item.quantity}</div>
                                    <button class="button__quantily-up" onclick="settingQuantity(${item.ID__LIST}, ${item.quantity + 1})">+</button>
                                </div>
    
                                <div class="setting__quantily-remove">
                                    <button class="btn__remove" onclick="removeCart(${item.ID__LIST})">Xóa</button>
                                </div>
                            </div>`
            listCart.appendChild(newDiv);
        }
        quantity.innerHTML = count;
        numberCart.innerHTML = count;
        totalBill.innerHTML = convert(totalPrice) + 'VND';
        totalMoney.innerHTML = convert(resultPrice) + 'VND';
    })


}

function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}

// get data form
buttonBuy.addEventListener('click', () => {
    for (let i = 0; i < listCartData.length; i++) {
        if (listCartData[i] != null) {
            isNotNull = true;
        }

    }

    if (isNotNull) {
        form.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    let result = listCartData.reduce((acc, item) => {
        if (item != null) {
            return {
                ...item
            }
        }
    }, []);
    console.log(result);
})
// show navbarr
let menu = document.querySelector('#menu-icon')
let header = document.querySelector('header')
let navbar = document.querySelector('.item__navbar-center')


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}




const listItems = document.querySelectorAll('.box__item-img');
const alo1 = document.querySelector('.container_coffee');
const alo3 = document.querySelector('.bxs-x-circle');
const nah = document.querySelector('.nahh');

function showItemInfo(item) {
    nah.innerHTML = `
    <div class="item__nahh-content">
      <div class="item__nahh-img">
        <img srcset="${item.img}" alt="">
      </div>
      <div class="item__nahhh-info">
        <div class="name">
        <div class="cart__nahh-name">${item.name}</div>
        <div class="cart__nahh-price">${item.price}.VND</div>
        </div>
        <div class="cart__nahh-subname">${item.subName}</div>
        <div class="rating">
                            <img class="img_rating" src="./img/rating/Star rating 4 of 5.png.png" alt="">
                            <p class="p_rating">ratings</p>
                        </div>
        <div class="item__nahh-maincontent">
            <div class="cart__nahh-content">${item.content}</div>
        </div>
        <div class="theklcoffee">
                            <div class="logo_kl">
                                <img src="./img/Exclude.png" alt="" class="logo_klcoffee">
                                <p class="name_kl">The K&L Cornor Coffee</p>
                            </div>
                            <div class="likee">
                                <div class="con-like">
                                    <input title="like" type="checkbox" class="like">
                                    <div class="checkmark">
                                        <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                            </path>
                                        </svg>
                                        <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                            </path>
                                        </svg>
                                        <svg class="celebrate" width="100" height="100"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="10,10 20,20" class="poly"></polygon>
                                            <polygon points="10,50 20,50" class="poly"></polygon>
                                            <polygon points="20,80 30,70" class="poly"></polygon>
                                            <polygon points="90,10 80,20" class="poly"></polygon>
                                            <polygon points="90,50 80,50" class="poly"></polygon>
                                            <polygon points="80,80 70,70" class="poly"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ingredients">
                            <h3 class="ingredi">Ingredients:</h3>
                            <h5 style="margin-top:10px;">Condiments</h5>
                            <ul>
                                <li>*1/2 oz Monin brown butter syrup,Milk</li>
                                <li>*1/2 oz Monin brown butter syrup,Espresso</li>
                            </ul>
                            <h5>Drinks</h5>
                            <ul>
                                <li>*2 shot(s) Espresso, butter syrup,Espresso</li>
                            </ul>
                            <h5>Dairy</h5>
                            <ul>
                                <li>*4 oz Milk</li>
                            </ul>
                        </div>
      </div>
    </div>
    
  `;

    alo1.classList.add('open');
}

function hideBuyTickets() {
    alo1.classList.remove('open');
}

listItems.forEach((item, index) => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
        const selectedItem = getItemByIndex(index);
        showItemInfo(selectedItem);
    });
});

function getItemByIndex(index) {
    const coffeeLength = dataDrinks.coffee.length;
    const milkTeaLength = dataDrinks.milkTea.length;
    const sodaLength = dataDrinks.soda.length;
    const cakeLength = dataCakes.length;

    if (index < coffeeLength) {
        return dataDrinks.coffee[index];
    } else if (index < coffeeLength + milkTeaLength) {
        return dataDrinks.milkTea[index - coffeeLength];
    } else if (index < coffeeLength + milkTeaLength + sodaLength) {
        return dataDrinks.soda[index - coffeeLength - milkTeaLength];
    } else if (index < coffeeLength + milkTeaLength + sodaLength + cakeLength) {
        return dataCakes[index - coffeeLength - milkTeaLength - sodaLength];
    }
}

alo3.addEventListener('click', hideBuyTickets);

alo1.addEventListener('click', function (event) {
    if (event.target === alo1) {
        hideBuyTickets();
    }
});

document.addEventListener('click', function (event) {
    if (!alo1.contains(event.target)) {
        hideBuyTickets();
    }
});




