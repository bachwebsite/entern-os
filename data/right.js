document.addEventListener('DOMContentLoaded', function() {
  // Get the custom context menu element
  var customContextMenu = document.getElementById('customContextMenu');
  // Get the help button element
  var helpButton = document.getElementById('helpButton');

  // Add event listener for right-click event on the document
  document.addEventListener('contextmenu', function(event) {
    // Prevent default context menu
    event.preventDefault();
    // Show custom context menu at mouse position
    customContextMenu.style.display = 'block';
    customContextMenu.style.left = event.clientX + 'px';
    customContextMenu.style.top = event.clientY + 'px';
  });

  // Add event listener for click event on the help button
  helpButton.addEventListener('click', function() {
    // Display the help menu (replace with your actual help menu logic)
    console.log("Displaying help menu");
    var helpText = "<br><p class='testicals' id='info'>Welcome to the Help Center for EntermOS<br/>&emsp;Commands:<br/>&emsp;&emsp;clear: Clears the screen except for the command prompt.<br/>&emsp;&emsp;help: Brings up this help menu as you are reading right now.</p>";
    document.body.insertAdjacentHTML('beforeend', helpText); // Insert help text at the end of the body
    // Hide the custom context menu after clicking help button
    customContextMenu.style.display = 'none';
  });

  // Add event listener to hide the custom context menu when clicking anywhere else on the document
  document.addEventListener('click', function() {
    customContextMenu.style.display = 'none';
  });
});
