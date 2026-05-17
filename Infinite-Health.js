// Function to give infinite health
function giveInfiniteHealth() {
  // Get the player's health
  const health = document.querySelector('.health');
  
  // Set the health to maximum value
  health.textContent = '100/100';
}

// Call the giveInfiniteHealth function
giveInfiniteHealth();
