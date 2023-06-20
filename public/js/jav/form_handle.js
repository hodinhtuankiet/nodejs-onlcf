let inputs = document.querySelectorAll('.form-group input');
const messageError = 'Xin vui lòng nhập chính xác';
const message = 'Xin vui lòng nhập'
const btnSubmit = document.querySelector('.form-submit');
const inputFullName = document.querySelector('#fullname');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#numberPhone');
const inputAddress = document.querySelector('#address');
const inputTime = document.querySelector('#time');
const inputPay = document.querySelector('#option-pay');
const btnRemoveOrder = document.querySelector('.button__remove-order button');
const activeBill = document.querySelector('.active__bill');
const closeActiveBill1 = document.querySelector('.icon__close-bill');
const closeActiveBill2 = document.querySelector('.close__bill');
const seenBill = document.querySelector('.seen__bill');

let dataOrder;
let dataUser = [];
let ID__BILL = 0;


inputs.forEach((input, index) => {
    input.onblur = () => {
        handleInput(input);
    }
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let dataOutput = {
        ID__BILL: ID__BILL,
        fullname: inputFullName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        address: inputAddress.value,
        time: inputTime.value,
        pay: inputPay.value
    }
    dataUser.push(dataOutput);
    form.style.display = 'none';
    document.body.style.overflow = 'auto';
    activeBill.style.display = 'block';
    document.body.style.overflow = 'hidden';
    showCart.classList.remove('active');
    getCartNotNull();
    resetForm();
    resetOrder()
    console.log(dataUser);
})

closeActiveBill1.addEventListener('click', handleCloseActiveBill);
closeActiveBill2.addEventListener('click', handleCloseActiveBill);

seenBill.addEventListener('click', handleSeenBill);

function handleSeenBill() {
    handleCloseActiveBill();
    openHistoryOrder();    
}

function handleCloseActiveBill() {
    activeBill.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function getCartNotNull() {
    dataOrder = listCartData.map((item) => {
        return item
    })
}


function check() {
    let i = 0;
    inputs.forEach((input, index) => {
        if (input.value.trim() != "") {
            i++;
        }
    })
    if (i == inputs.length) {
        btnSubmit.classList.remove('disabled');
        btnSubmit.style.cursor = 'pointer';
        btnSubmit.removeAttribute('disabled', '');
    } else {
        btnSubmit.classList.add('disabled');
        btnSubmit.setAttribute('disabled', '');
    }
}

setInterval(check, 1000)

function handleInput(input) {
    const parentInput = input.parentElement;
    const messageInput = parentInput.querySelector('.form-message');
    if (input.value.trim() == "") {
        messageInput.innerHTML = `${message} ${input.name}`;
        messageInput.classList.add('invalid')
        parentInput.classList.add('invalid')
    } else if (input.value != "") {
        checkInput(input, parentInput, messageInput);
    }

    input.addEventListener('mousedown', () => {
        messageInput.classList.remove('invalid')
        parentInput.classList.remove('invalid')
    })
}

function checkInput(input, parentInput, messageInput) {
    messageInput.innerHTML = "";
    messageInput.classList.remove('invalid')
    parentInput.classList.remove('invalid')

    if (input.id == 'email') {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        testErrorInput(input, messageInput, parentInput, regex)

    } else if (input.id == 'numberPhone') {
        const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        testErrorInput(input, messageInput, parentInput, regex);

    }
}

function testErrorInput(input, messageInput, parentInput, regex) {
    if (regex.test(input.value)) {
        messageInput.classList.remove('invalid')
        parentInput.classList.remove('invalid')
    } else {
        messageInput.innerHTML = `${messageError} ${input.name}`;
        messageInput.classList.add('invalid')
        parentInput.classList.add('invalid')
    }
}

function resetForm() {
    inputFullName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputAddress.value = '';
    inputTime.value = '';
    inputPay.value = '';
}


function resetOrder() {
    listBillOrder.innerHTML = '';

    dataUser.forEach((user) => {

        let newLi = document.createElement('li');
        newLi.classList.add('item__order');
        newLi.innerHTML = `<div class="item__order-title">
                    HÓA ĐƠN 1
                </div>

                <ul class="list__cart-order">
                    
                </ul>

                <div class="item__order-info">
                    <div class="item__order-info-header">
                        <div class="item__order-info-title">
                            THÔNG TIN
                        </div>
                    </div>
                    
                    <div class="item__order-info-content">
                        <div class="order__info-name mg10">
                            <span class="data-title">Tên</span>
                            <span class="data-name">: ${user.fullname}</span>
                        </div>

                        <div class="order__info-phone mg10">
                            <span class="data-title">Số điện thoại</span>
                            <span class="data-name">: ${user.phone}</span>
                        </div>

                        <div class="order__info-address mg10">
                            <span class="data-title">Địa chỉ</span>
                            <span class="data-name">: ${user.address}</span>
                        </div>

                        <div class="order__info-time mg10">
                            <span class="data-title">Thời gian</span>
                            <span class="data-name">: "${user.time}"</span>
                        </div>

                        <div class="order__info-pay mg10">
                            <span class="data-title">Phương thức thanh toán</span>
                            <span class="data-name">: "${user.pay}"</span>
                        </div>

                        <div class="order__info-status mg10">
                            <span class="data-title">Trạng thái</span>
                            <span class="data-status">: Chờ</span>
                        </div>
                    </div>
                </div>

                <div class="button__remove-order">
                    <button>Hủy đơn hàng</button>
                </div>`
        listBillOrder.appendChild(newLi);

        dataOrder.forEach((item) => {
            let newItemCart = document.createElement('li');
            newItemCart.classList.add('item__cart-order');
            newItemCart.innerHTML = `
        <div class="cart__order-img">
                            <img src="${item.img}" alt="">
                        </div>

                        <div class="cart__order-info">
                            <div class="cart__order-info-name">${item.name}</div>
                            <div class="cart__order-info-subname">${item.subName}</div>
                            <div class="cart__order-info-price">${convert(item.price)} VND</div>
                        </div>                                    

                        <div class="cart__order-quantity">
                            x ${item.quantity}
                        </div>`
            document.querySelector('.list__cart-order').appendChild(newItemCart);
        })

    })
}