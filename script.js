document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelector('.hearts');
    const message = document.querySelector('.message');
    
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