const slogans = [
    "Clothing and style for every story!",
    "Create your look. Effortlessly.",
    "Trends that suit everyone.",
    "Your style, your rules.",
    "Shopping made easy. Style in every detail."
];

let currentIndex = 0;
const sloganElement = document.getElementById('slogan');

function showSlogan() {
    sloganElement.textContent = slogans[currentIndex];
    sloganElement.classList.add('visible');
    
    setTimeout(() => {
        sloganElement.classList.remove('visible');
        currentIndex = (currentIndex + 1) % slogans.length;
    }, 5000);
}

function rotateSlogans() {
    showSlogan();
    
    setInterval(() => {
        showSlogan();
    }, 6000);
}

rotateSlogans();