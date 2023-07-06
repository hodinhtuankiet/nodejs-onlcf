// Đối tượng validator 
function Validator(options) {
    // options.form = #form_1 --> get tag all element in form 
    var formElement = document.querySelector(options.form);

    if (formElement) {
        // console.log(formElement)
        options.rules.forEach(function (rule) {
            // rule.selector = list elements input 
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            // console.log(inputElement)
            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);
                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add('invalid')
                    } else {
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid')

                    }
                }
                // console.log(inputElement.parentElement);
            }
        })
    }
}
// define rules
// principles of rules:
// 1. when invalid => showw message error
// 2. when valid  => return 0;(undefined)
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Please do not blank data name";
        }
    };
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {
            return value.trim() ? undefined : "Please do not blank data email";

        }
    };
}
Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function () {
            return value.trim() ? undefined : "Please do not blank data password";

        }
    };
}
Validator.isConfirmPassword = function (selector) {
    return {
        selector: selector,
        test: function () {
            return value.trim() ? undefined : "Please do not blank data confirmPassword";

        }
    };
}

//// convert coffeee
// Get a reference to the login form and its inputs
const loginForm = document.querySelector('.form-box.login form');
const emailInput = document.getElementById('email');
const passwordInput = document.querySelector('.form-box.login input[type="password"]');

// Add an event listener to the form submission event
loginForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the entered email and password match the desired credentials
    if (emailInput.value === 'hodinhtuankiet@gmail.com' && passwordInput.value === '123') {
        // Redirect to the desired page
        window.location.href = 'index.html';
    } else {
        // Display an error message to the user
        const formMessage = document.querySelector('.form-box.login .form-message');
        formMessage.textContent = 'Invalid email or password';
    }
});
