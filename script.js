
const excuses = {
    work: [
        "Sorry, I can't make it to work because my pet goldfish is sick.",
        "I accidentally wore my pajamas to work and had to go home to change.",
        "I was abducted by aliens but I managed to escape just in time!",
        "I can't come to work today; my cat is giving me the silent treatment, and I need to resolve it.",
        "I'm stuck in a virtual meeting that feels like a never-ending episode of 'Survivor.'",
        "I tried to take a shortcut to work and ended up in a completely different state.",
        "My coffee maker broke, and I can't function without my morning brew!",
        "I just realized I left my lunch in the fridge at work… from last year!",
        "I accidentally joined a yoga class instead of a meeting, and now I can't get out of downward dog.",
        "I was up all night watching cat videos on the internet, and now I can't face the world.",
        "My alarm clock decided to take a day off, and I couldn't find it to set it.",
        "I have to attend an emergency family meeting... with my favorite pizza delivery guy.",
        "I’m currently stuck in a battle with my printer; it’s winning."
    ],
    family: [
        "My cousin's dog had a birthday party, and I couldn't miss it!",
        "I had to help my grandma with her knitting.",
        "I was busy rescuing my little brother from a tree.",
        "I have to help my sister organize her extensive collection of rubber duckies.",
        "I can't come today; my family has deemed it 'Family Pajama Day,' and I have to participate.",
        "I’m mediating a heated debate between my parents about the best pizza topping.",
        "I have a family reunion today, and I’m the designated storyteller for all the embarrassing moments.",
        "My dog has a playdate with my cousin's dog, and I need to be the chaperone.",
        "I promised my dad I’d help him find the remote control; it’s become a family legend.",
        "I can’t leave because my family has a marathon of our favorite embarrassing home videos.",
        "I'm busy helping my brother craft a heartfelt apology to his imaginary friend.",
        "I have to supervise my dad’s attempts to fix the Wi-Fi; it’s a full-time job.",
        "I can’t come because my family is conducting a ‘who can tell the worst dad joke’ contest."
    ],
    social: [
        "I got lost in my own neighborhood and couldn’t find my way back.",
        "My favorite show had a marathon, and I couldn't leave the couch.",
        "I thought today was next week, so I made other plans!",
        "I’m participating in an intense staring contest with my dog, and it’s getting serious.",
        "I just realized I have a hot date with my Netflix queue, and I can't break it!",
        "I’m in the middle of a significant research project on how many snacks I can eat in one sitting.",
        "I have to babysit my roommate’s imaginary friend; they’re quite demanding.",
        "I can’t leave; my refrigerator is calling me for a midnight snack meeting.",
        "I’m currently stuck in a book that won’t let me go until I finish it.",
        "I can’t make it because my social skills are still on backorder.",
        "I accidentally agreed to help my neighbor train for the world’s slowest marathon.",
        "I’m trying to find my missing sock; it’s become a personal mission.",
        "I promised my cat I’d stay in tonight and give him a full spa treatment."
    ]
};


function generateExcuse(category) {
    const chatContent = document.getElementById('chat-content');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');

    if (excuses[category]) {
        const randomIndex = Math.floor(Math.random() * excuses[category].length);
        const excuseText = excuses[category][randomIndex];
        
        botMessage.innerHTML = `${excuseText}
            <div class="button-container">
                <button class="copy-button" onclick="copyToClipboard('${excuseText}')"><i class="fas fa-copy"></i></button>
            </div>`;
    } else {
        botMessage.innerText = "Please enter a valid category: work, family, or social.";
    }

    chatContent.appendChild(botMessage);
    chatContent.scrollTop = chatContent.scrollHeight;
    animateMessage(botMessage);
}


function copyToClipboard(excuse) {
    navigator.clipboard.writeText(excuse).then(() => {
        alert("Excuse copied to clipboard!");
    }, (err) => {
        console.error("Could not copy text: ", err);
    });
}

function shareExcuse(excuse) {
    if (navigator.share) {
        navigator.share({
            title: 'Excuse to Share',
            text: excuse,
            url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert(`Share this excuse: "${excuse}"`);
    }
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

      
        setTimeout(() => generateExcuse(userInput), 500);

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
