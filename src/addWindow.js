const electron = require('electron');
const {ipcRenderer} = electron;
const remote = electron.remote

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const item = document.querySelector('#item').value;
    // Check empty value
    if(item != '') {
        ipcRenderer.send('item:add', item);
    }
}

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow()
    window.close()
})