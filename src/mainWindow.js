const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');

ipcRenderer.on('item:add', function (event, item) {
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    li.appendChild(itemText);
    ul.appendChild(li);
});