var commandHistory = [];
var historyIndex = -1;
var element = document.getElementById("input");
inputElement.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    checkInput();
    inputElement.focus();
  }
  else if (event.key === "ArrowUp") {
    navigateCommandHistory(-1); // Up arrow key pressed
  } else if (event.key === "ArrowDown") {
    navigateCommandHistory(1); // Down arrow key pressed
  }
});
function checkInput() {
  var inputValue = inputElement.value.trim().toLowerCase();

  if (inputValue === "clear") {
    console.log("Clearing");
    // Clear the output text while preserving the root and input elements
    Array.from(document.body.children).forEach(child => {
      if (child !== rootElement && child !== inputElement) {
        child.remove();
      }
    });
    inputElement.value = ""; // Clear input field after executing command
  }
  else if (inputValue === "help") {
    console.log("Displaying help menu");
    var helpText = "<br><p class='testicals' id='info'>Welcome to the Help Center for EntermOS<br/>&emsp;Commands:<br/>&emsp;&emsp;clear: Clears the screen except for the command prompt.<br/>&emsp;&emsp;help: Brings up this help menu as you are reading right now.<br/>&emsp;&emsp;config: Opens the configuration menu.</p>";
    document.body.insertAdjacentHTML('beforeend', helpText); // Insert help text at the end of the body
    inputElement.value = ""; // Clear input field after executing command
  }
  else if (inputValue === "config") {
    console.log("Entering configuration mode");
    // Placeholder for configuration options
    var configText = "<br><p class='info'>Configuration Options:<br/>&emsp;&emsp;1. Change User Name: Type 'change_user_name' followed by the new name.</p>";
    document.body.insertAdjacentHTML('beforeend', configText);
    inputElement.value = ""; // Clear input field after executing command
  }
  else if (inputValue.startsWith("change_user_name")) {
    var newName = inputValue.split(" ")[1]; // Extract new name from command
    if (newName) {
      console.log("Changing user name to " + newName);
      usrr = newName;
      // Save new user name to local storage
      localStorage.setItem('userName', usrr);
      // Update root element with new user name
      rootElement.textContent = "C:\\Users\\" + usrr + "\\root>";
      appendText('Name Changed Successfully!');
    } else {
      console.log("Invalid command format. Usage: change_user_name <new_name>");
    }
    inputElement.value = ""; // Clear input field after executing command
  }
  else if (inputValue !== "") { // Only check for unknown command if input is not empty
    console.log("Unknown command");
    var errorText = "<br><p class='error'>Unknown command: " + inputValue + "</p>"; // Error message for unknown command
    document.body.insertAdjacentHTML('beforeend', errorText);
    inputElement.value = ""; // Clear input field after displaying error
  }
  else if (inputValue.startsWith("make ")) {
    var fileName = inputValue.substring(5); // Extract filename after "make "
    if (fileName.trim().length === 0) {
      console.log("Invalid filename");
      return;
    }
    console.log("Creating file: " + fileName);
    createFile(fileName);
    inputElement.value = ""; // Clear input field after executing command
  }

  commandHistory.push(inputValue);
  historyIndex = -1;
}
function navigateCommandHistory(step) {
  if (commandHistory.length === 0) {
    return; // No command history available
  }
  historyIndex += step;
  if (historyIndex < 0) {
    historyIndex = 0;
  } else if (historyIndex >= commandHistory.length) {
    historyIndex = commandHistory.length - 1;
  }
  inputElement.value = commandHistory[historyIndex];
}