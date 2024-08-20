// script.js

// Function to get a random color from a predefined set
function getRandomColor() {
    const colors = ['#FF6347', '#4682B4', '#32CD32']; // Example colors: Tomato, SteelBlue, LimeGreen
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Function to generate random size within a range
  function getRandomSize() {
    return Math.random() * (400 - 100) + 100; // Random size between 100px and 400px
  }
  
  // Function to create and animate shapes
  function createShape() {
    const shapesContainer = document.getElementById('shapes-container');
    const shapeTypes = ['square', 'circle', 'triangle'];
    const directions = ['upDown', 'sideToSide', 'diagonal'];
    const numberOfShapes = 6; // Fewer shapes for a cleaner look
  
    for (let i = 0; i < numberOfShapes; i++) {
      const shape = document.createElement('div');
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const direction = directions[Math.floor(Math.random() * directions.length)];
  
      const width = getRandomSize();
      const height = getRandomSize();
      
      shape.className = `shape ${shapeType}`;
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
  
      // Set random size
      shape.style.width = `${width}px`;
      shape.style.height = `${height}px`;
  
      // Assign a random color from the predefined set
      shape.style.backgroundColor = getRandomColor();
  
      // Set random speed and animation based on direction
      const speed = Math.random() * (15 - 8) + 8; // Speed between 8s and 15s
      shape.style.animation += `, ${direction === 'upDown' ? 'moveUpDown' : direction === 'sideToSide' ? 'moveSideToSide' : 'moveDiagonal'} ${speed}s ease-in-out infinite`;
  
      shapesContainer.appendChild(shape);
    }
  }
  
  // Initialize shapes on page load
  document.addEventListener('DOMContentLoaded', createShape);
  