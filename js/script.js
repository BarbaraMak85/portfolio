const header_links = document.querySelectorAll('.component--menu--list a');
for (link of header_links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const linkElement = this.dataset.element;
        const targetElement = document.querySelector(linkElement);

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: targetElement.offsetTop - 40
        })
    });
}

const scrollTopButton = document.querySelector('#scrollBtn');
scrollTopButton.addEventListener('click', function(e) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
    })
});



const showButton = document.getElementById('show-more');
showButton.addEventListener('click', showMore);
const aboutMeParagraph = document.querySelector('.about-me-paragraph');


function showMore() {
    aboutMeParagraph.classList.toggle('full-line');

    if (aboutMeParagraph.classList.contains('full-line')) {
        this.innerHTML = 'Ukryj szczegóły';
    } else {
        this.innerHTML = 'Dowiedz się więcej';
    }
}

const responsiveMenu = document.querySelector('#responsive_menu');
const toggleMenuButton = document.querySelector('#toggle_menu');
toggleMenuButton.addEventListener('click', toggleMenu);


function toggleMenu() {
    responsiveMenu.classList.toggle('visible');
    this.querySelector('span').classList.toggle('fas');
    this.querySelector('span').classList.toggle('fa-times');
}