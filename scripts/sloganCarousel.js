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
    // Устанавливаем текст текущего слогана
    sloganElement.textContent = slogans[currentIndex];
    sloganElement.classList.add('visible'); // Плавное появление

    // Убираем видимость через 4 секунды
    setTimeout(() => {
        sloganElement.classList.remove('visible'); // Плавное исчезновение
        currentIndex = (currentIndex + 1) % slogans.length; // Следующий слоган
    }, 5000); // 5 секунд видимости текста
}

function rotateSlogans() {
    showSlogan(); // Показать первый слоган

    // Через 6 секунд показываем следующий
    setInterval(() => {
        showSlogan();
    }, 6000); // 6 секунд полный цикл (5 на экран + 1 секунда исчезновения)
}

// Запускаем ротацию при загрузке страницы
rotateSlogans();