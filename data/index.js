function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}
async function appendTimer() {
  const text = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  const paragraph = document.createElement('p');
  paragraph.textContent = "All files loaded in " + text + "ms!";
  paragraph.classList.add('testicals');
  document.body.appendChild(paragraph);
  document.createElement('br');
  console.log(text);
  await delay(2000);
  document.body.removeChild(paragraph);
};

async function appendText(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  paragraph.classList.add('testicals');
  document.body.appendChild(paragraph);
  document.createElement('br');
  console.log(text);
  await delay(2000);
  document.body.removeChild(paragraph);
}