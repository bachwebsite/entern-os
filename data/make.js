function createFile(fileName) {
  // Generate file content based on file extension
  var fileContent = "";
  if (fileName.endsWith(".js")) {
    fileContent = "// JavaScript file\n\n";
  } else if (fileName.endsWith(".txt")) {
    fileContent = "Text file\n\n";
  } else {
    console.log("Unsupported file type");
    return;
  }

  // Create a blob containing the file content
  var blob = new Blob([fileContent], { type: "text/plain" });

  // Create a link element to trigger the download
  var link = document.createElement("a");
  link.download = fileName;
  link.href = window.URL.createObjectURL(blob);

  // Append the link to the body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
}
