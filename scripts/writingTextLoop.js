const typedOut = document.querySelector('.typed-out');
const text = "Hosoren Online Shop..."; // Текст для печати
const typingDuration = 1200; // Длительность печати текста (в миллисекундах)
const holdDuration = 4000; // Время показа текста перед повтором (в миллисекундах)

function startTypingEffect() {
    // Устанавливаем начальные условия
    typedOut.textContent = "";
    typedOut.style.animation = `typing ${typingDuration / 1000}s steps(${text.length}, end) forwards, blinking .75s infinite`;

    // Печатаем текст посимвольно через setTimeout
    let charIndex = 0;
    const typingInterval = typingDuration / text.length;
    const typing = setInterval(() => {
        if (charIndex < text.length) {
            typedOut.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typing);
            // Ждем заданное время (holdDuration) перед сбросом
            setTimeout(() => {
                typedOut.textContent = ""; // Сброс текста
                startTypingEffect(); // Перезапускаем эффект
            }, holdDuration);
        }
    }, typingInterval);
}

// Запускаем эффект при загрузке
startTypingEffect();
