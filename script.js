const progressBar = document.getElementById('progress-bar');
const chapterBadge = document.getElementById('chapter-badge');
const petCount = document.getElementById('pet-count');
const toast = document.getElementById('toast');
const chapters = document.querySelectorAll('.parallax');

let pets = 0;
let toastTimer;

function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / scrollable) * 100 + '%';
    chapterBadge.textContent = 'Before opening';

    chapters.forEach(function (chapter) {
        if (chapter.getBoundingClientRect().top <= window.innerHeight / 2) {
            chapterBadge.textContent = chapter.querySelector('time').textContent + ' · ' +
                                       chapter.querySelector('h2').textContent;
        }
    });
}

function petKitty() {
    pets += 1;
    petCount.textContent = pets;
    toast.textContent = 'Purrr… Kitty has been petted ' + pets + (pets === 1 ? ' time.' : ' times.');
    toast.classList.add('visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        toast.classList.remove('visible');
    }, 2500);
}

window.addEventListener('scroll', updateProgress);
document.getElementById('pet-button').addEventListener('click', petKitty);

