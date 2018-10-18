const electron = require('electron');
const {ipcRenderer} = electron;

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const item = document.querySelector('#item').value;
    ipcRenderer.send('item:add', item);
}