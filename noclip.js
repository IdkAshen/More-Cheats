// Function to enable no-clip
function enableNoClip() {
  // Get the player's character
  const character = document.querySelector('.character');
  
  // Set up an event listener for the 'W' key
  document.addEventListener('keydown', event => {
    if (event.key === 'w') {
      // Simulate a forward movement
      character.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    }
  });
  
  // Set up an event listener for the 'S' key
  document.addEventListener('keydown', event => {
    if (event.key === 's') {
      // Simulate a backward movement
      character.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    }
  });
}

// Call the enableNoClip function
enableNoClip();
