
const compliments = {
    appearance: [
        "You're looking fantastic today!",
        "Your style is always on point!",
        "You have a radiant smile that lights up the room!"
    ],
    talent: [
        "You're incredibly talented!",
        "Your skills are unmatched!",
        "You have an amazing knack for creativity."
    ],
    personality: [
        "You have a wonderful sense of humor!",
        "You make people feel special just by being around.",
        "You brighten everyone's day!"
    ]
};


function generateCompliment(category) {
    const chatContent = document.getElementById('chat-content');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');

    if (compliments[category]) {
        const randomIndex = Math.floor(Math.random() * compliments[category].length);
        botMessage.innerText = compliments[category][randomIndex];
    } else {
        botMessage.innerText = "Please enter a valid category: appearance, talent, or personality.";
    }

    chatContent.appendChild(botMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
    animateMessage(botMessage);
}

document.querySelector('.send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-message').value.toLowerCase().trim();
    if (userInput) {
        const chatContent = document.getElementById('chat-content');

        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerText = userInput;
        chatContent.appendChild(userMessage);
        animateMessage(userMessage);

        setTimeout(() => generateCompliment(userInput), 500);

        document.getElementById('user-message').value = '';
    }
});

function animateMessage(element) {
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
}

document.querySelector('.clear-chat').addEventListener('click', () => {
    document.getElementById('chat-content').innerHTML = '';
});
