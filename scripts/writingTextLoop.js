const typedOut = document.querySelector('.typed-out');
const text = "elcome to Hosoren!";
const typingDuration = 1500;
const holdDuration = 4000;

function startTypingEffect() {    
    typedOut.textContent = "W";
    typedOut.style.animation = `typing ${typingDuration / 1000}s steps(${text.length}, end) forwards, blinking .75s infinite`;
    
    let charIndex = 0;
    const typingInterval = typingDuration / text.length;
    const typing = setInterval(() => {
        if (charIndex < text.length) {
            typedOut.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typing);           
            setTimeout(() => {
                typedOut.textContent = "";
                startTypingEffect();
            }, holdDuration);
        }
    }, typingInterval);
}

startTypingEffect();
