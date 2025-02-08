const messages = [
    "Are you sure?",
    "Really sure??",
    "pakkaaaaaaaaaaaaaaaaa?",
    "niyati ji please...",
    "ek baar dubara soch lo!",
    "If you say no, I will be really seeeed...",
    "I will be very seeeeed...",
    "I will be bhot bhot bhot  sad...",
    "Ok fine, ab me kuch bolunga he nhiiiiiiii...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}