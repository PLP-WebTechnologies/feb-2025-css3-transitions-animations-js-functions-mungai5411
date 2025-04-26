localStorage.setItem('welcomeMessage', 'Hello!');
console.log(localStorage.getItem('welcomeMessage'));
const button = document.getElementById('animateButton');
const animatedElement = document.getElementById('animatedElement');
button.addEventListener('click', () => {
    animatedElement.style.animation = 'fadeIn 1s forwards';
});
