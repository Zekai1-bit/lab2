const progressBar = document.getElementById('progress-bar');
const chapterBadge = document.getElementById('chapter-badge');
const petButton = document.getElementById('pet-button');
const petCount = document.getElementById('pet-count');
const toast = document.getElementById('toast');
const chapters = document.querySelectorAll('.parallax');

window.addEventListener('scroll', function () {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / scrollable) * 100 + '%';

    chapters.forEach(function (chapter) {
        if (chapter.getBoundingClientRect().top <= window.innerHeight / 2) {
            chapterBadge.textContent = chapter.querySelector('time').textContent + ' · ' +
                                       chapter.querySelector('h2').textContent;
        }
    });
});

let pets = 0;
let toastTimer;

petButton.addEventListener('click', function () {
    pets++;
    petCount.textContent = pets;

    toast.textContent = 'Purrr… Kitty has been petted ' + pets + (pets === 1 ? ' time.' : ' times.');
    toast.classList.add('visible');

});
