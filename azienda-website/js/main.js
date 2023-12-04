const header = document.getElementById('navbar');
window.onscroll = function () {
    const top = window.scrollY;
    (top >= 100) ? header.classList.add('navbarDark') : header.classList.remove('navbarDark');
}

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#navbar ul li a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
