// Create shapes and add them to the background container
const background = document.querySelector('.background-animation');

// Function to generate random positions, sizes, and types
function createShape() {
    const shape = document.createElement('div');
    const shapeTypes = ['square', 'circle', 'triangle'];
    const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    
    shape.classList.add('shape', randomShape);

    // Random position
    shape.style.top = Math.random() * window.innerHeight + 'px';
    shape.style.left = Math.random() * window.innerWidth + 'px';

    // Random size
    const size = Math.random() * 50 + 30;
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';

    // Different sizes for triangle
    if (randomShape === 'triangle') {
        shape.style.borderLeft = (size / 2) + 'px solid transparent';
        shape.style.borderRight = (size / 2) + 'px solid transparent';
        shape.style.borderBottom = size + 'px solid #e74c3c';
    }

    background.appendChild(shape);
}

// Create multiple shapes
for (let i = 0; i < 20; i++) {
    createShape();
}

// Move shapes diagonally and randomly
function animateShapes() {
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach(shape => {
        const randomX = Math.random() * (window.innerWidth - shape.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - shape.offsetHeight);

        shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    });
}

setInterval(animateShapes, 5000);
