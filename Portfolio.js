'use strict';
// const typewriterEl = document.getElementById('typewriterEl');
function typeWriter(el) {

    const textArray = el.innerHTML.split('');
    el.innerHTML = ''
    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter), 95 * i)

    });

    setInterval(() => typeWriter(el), 6000);
}
typeWriter(typewriterEl);