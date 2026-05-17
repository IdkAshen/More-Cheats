// Function to create an aimbot
function createAimbot() {
  // Get the player's crosshair
  const crosshair = document.querySelector('.crosshair');
  
  // Function to calculate the aimbot's target
  function calculateTarget() {
    // Find the nearest enemy player
    const enemies = document.querySelectorAll('.enemy-player');
    let closestEnemy;
    let closestDistance = Infinity;
    
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      const distance = Math.hypot(enemy.clientX - crosshair.clientX, enemy.clientY - crosshair.clientY);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestEnemy = enemy;
      }
    }
    
    return closestEnemy;
  }
  
  // Set up an event listener for mouse movement
  document.addEventListener('mousemove', event => {
    // Calculate the aimbot's target
    const target = calculateTarget();
    
    // Simulate a mouse click on the target
    target.dispatchEvent(new MouseEvent('click'));
  });
}

// Call the createAimbot function
createAimbot();
