function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function createShape() {
    const shapeContainer = document.querySelector('.shape-container');
    const shapeTypes = ['square', 'circle', 'triangle'];
    const randomShapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const shape = document.createElement('div');
    shape.classList.add('shape', randomShapeType);
    shape.style.left = `${getRandomNumber(0, 100)}vw`; // Use vw units for responsive positioning
    shape.style.top = `${getRandomNumber(0, 100)}vh`; // Use vh units for responsive positioning
    shape.style.animationDuration = `${getRandomNumber(20, 40)}s`;
    shape.style.animationDelay = `${getRandomNumber(0, 10)}s`; // Add a delay to stagger shape appearance
    shapeContainer.appendChild(shape);
  
    shape.addEventListener('animationend', () => {
      shapeContainer.removeChild(shape);
    });
  
    // Trigger reflow to restart the animation
    void shape.offsetWidth;
  }
  
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  const throttledCreateShape = throttle(createShape, 100);
  
  window.addEventListener('resize', throttledCreateShape);
  