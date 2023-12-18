let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function () {
    document.body.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.header ul li a');

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

// elements
let elements_to_watch = document.querySelectorAll('.watch');

// callback 
let callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add("in-page");
        } else {
            item.target.classList.remove("in-page");
        }
    });
}

// observer
let observer = new IntersectionObserver(callback, { threshold: 0.6 });

// apply
elements_to_watch.forEach((element) => {
    observer.observe(element);
});


