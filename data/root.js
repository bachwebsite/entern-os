var usrr = localStorage.getItem('userName');
if (!usrr) {
    usrr = window.prompt('Who is using this computer?');
    if (!usrr) {
        usrr = 'Guest';
    }
    // Save user's name to local storage
    localStorage.setItem('userName', usrr);
}



const rootElement = document.createElement('div');
rootElement.textContent = "C:\\Users\\" + usrr + "\\root>";
rootElement.classList.add('root');

const inputElement = document.createElement('input');
inputElement.id = 'input';
inputElement.setAttribute('type', 'text');

document.body.appendChild(rootElement);
document.body.appendChild(inputElement);

rootElement.style.display = 'inline-block';
inputElement.style.display = 'inline-block';
inputElement.focus();
