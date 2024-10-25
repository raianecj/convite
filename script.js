// script.js
document.addEventListener('scroll', function () {
    const section = document.querySelector('.section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
});
