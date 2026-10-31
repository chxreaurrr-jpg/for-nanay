
// =====================================
// FOR NANAY - JAVASCRIPT
// Animations and Website Interactions
// =====================================


// 1. NAVIGATION BETWEEN SCREENS

function goTo(id) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    window.scrollTo(0, 0);

    startHearts();
}


// 2. OPEN THE LETTER

function revealLetter() {
    document.getElementById('envelope').style.display = 'none';

    document.getElementById('hint').style.display = 'none';

    document.getElementById('letterCard').style.display = 'block';
}


// 3. ADD PHOTOS TO THE GALLERY

function addPhotos(event) {
    const gallery = document.getElementById('gallery');

    gallery.innerHTML = '';

    Array.from(event.target.files).forEach(file => {

        if (!file.type.startsWith('image/')) return;

        const img = document.createElement('img');

        img.src = URL.createObjectURL(file);

        img.alt = 'A special memory with Nanay';

        gallery.appendChild(img);
    });
}


// 4. CREATE FLOATING HEARTS

function createHeart() {

    const heart = document.createElement('div');

    heart.className = 'heart';

    const decorations = ['♡', '🌸', '💗', '🌷'];

    heart.textContent =
        decorations[Math.floor(Math.random() * decorations.length)];

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.fontSize =
        (18 + Math.random() * 20) + 'px';

    heart.style.animationDuration =
        (5 + Math.random() * 4) + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}


// 5. START FLOATING HEARTS

function startHearts() {

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 300);

    }
}


// 6. FINAL SURPRISE

function showHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

}


// 7. AUTOMATIC FLOATING DECORATIONS

setInterval(() => {

    if (document.querySelector('.screen.active')) {

        if (Math.random() > 0.5) {
            createHeart();
        }

    }

}, 1800);
