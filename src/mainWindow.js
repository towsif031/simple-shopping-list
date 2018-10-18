const electron = require('electron');
const {ipcRenderer} = electron;
const ul = document.querySelector('ul');

// Add item
ipcRenderer.on('item:add', function(event, item) {
    ul.className = 'collection';
    const li = document.createElement('li');
    li.className = 'collection-item';
    const itemText = document.createTextNode(item);
    li.appendChild(itemText);
    ul.appendChild(li);
});

// Clear items
ipcRenderer.on('item:clear', function() {
    ul.innerHTML = '';
    ul.className = '';
});

// Remove item
ul.addEventListener('dblclick', removeItem);

function removeItem(event) {
    event.target.remove();
    if(ul.children.length == 0) {
        ul.className = '';
    }
}