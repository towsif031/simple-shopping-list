const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');

// Add item
ipcRenderer.on('item:add', function(event, item) {
    const li = document.createElement('li');
    const itemText = document.createTextNode(item);
    li.appendChild(itemText);
    ul.appendChild(li);
});

// Clear items
ipcRenderer.on('item:clear', function() {
    ul.innerHTML = '';
});

// Remove item
ul.addEventListener('dblclick', removeItem);

function removeItem(event) {
    event.target.remove();
}