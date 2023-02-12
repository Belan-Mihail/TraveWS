let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if(inputNumber.value.lenght > inputNumber.maxLength)
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});

// подключаем AOS

AOS.init({
    duration: 400,
    delay: 200,
});