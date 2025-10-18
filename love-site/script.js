document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelector('.hearts');
    const message = document.querySelector('.message');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    const loveNote = document.getElementById('love-note');
    const messageBtn = document.getElementById('messageBtn');
    const surpriseBtn = document.getElementById('surpriseBtn');
    
    const notes = [
        "Every day I fall in love with you more and more! ❤️",
        "You make my heart skip a beat every time I think of you... 💓",
        "Missing you is my heart's full-time job! 💝",
        "You're the first thing on my mind each morning! 💖",
        "Distance means nothing when you mean everything! 💗"
    ];
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    }


    // Show random love note when 'Read Note' is clicked
    messageBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        typeWriter(loveNote, randomNote);
    });


    // Helper to create glitter sparkles
    function showGlitter() {
        const modalContent = document.querySelector('.modal-content');
        for (let i = 0; i < 24; i++) {
            const sparkle = document.createElement('span');
            sparkle.className = 'glitter';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = (Math.random() * 1.5) + 's';
            modalContent.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1800);
        }
    }

    // Show 'I love you' animated with emojis and glitter when 'Send Love' is clicked
    surpriseBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        typeWriter(loveNote, 'I love you ❤️😍✨💖💫', 80);
        showGlitter();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        loveNote.textContent = '';
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Random starting position and size
        heart.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 20 + 10; // Random size between 10-30px
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Random animation duration and delay
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // Random color
        const hue = Math.random() * 60 - 30; // Pink/Red variations
        heart.style.backgroundColor = `hsl(340, 100%, ${70 + hue}%)`;
        
        hearts.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Create new hearts periodically
    setInterval(createHeart, 200);

    // Add hover effect
    message.addEventListener('mouseover', () => {
        for(let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 100);
        }
    });
});