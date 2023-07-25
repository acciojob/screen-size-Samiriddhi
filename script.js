
// Function to update the width and height on the page
    function updateWidthAndHeight() {
      const sizeText = document.getElementById('sizeText');

      // Get the updated width and height of the window
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update the <h1> tag with the new values
      sizeText.textContent = `Width: ${width} and Height: ${height}`;
    }

    // Call the function initially to display the initial width and height
    updateWidthAndHeight();

    // Add an event listener to the window's 'resize' event
    window.addEventListener('resize', updateWidthAndHeight);