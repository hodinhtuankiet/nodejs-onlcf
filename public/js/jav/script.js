
const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const regististLink = document.querySelector('.Register-link')

loginLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})
regististLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})


