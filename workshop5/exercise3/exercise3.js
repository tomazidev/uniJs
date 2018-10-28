var userInput = document.getElementById('user-input'),
    saveButton = document.getElementById('btn'),
    resultEl = document.getElementById('saved-text'),
    counter = 0;

function makeMasterDeleteButton(counter) {
    var btn = document.createElement('a');
    btn.textContent = 'X';
    btn.classList.add('item-delete');
    btn.setAttribute('href', '#');
    btn.setAttribute('id', 'item_'+counter);
    return btn;
}

function makeNewItem() {
    var noteElement = document.createElement('p');
    noteElement.textContent = userInput.value;
    return noteElement;
}

function joinItemAndButton (counter) {
    var item = makeNewItem();
    var button = makeMasterDeleteButton(counter);
    item.insertAdjacentElement('beforeend' ,button);
    return item;
}

if (userInput !== null && saveButton !== null && resultEl !== null) {

    
    // Listen for clicks on form button
        saveButton.addEventListener('click', function (event) {
            var item = makeNewItem();
            var button = makeMasterDeleteButton(counter++);
            var submitted = userInput.value;

            if (submitted !== '') {
                item.insertAdjacentElement('beforeend', button);
                resultEl.appendChild(item);
                
                // Listen for clicks on delete button
                button.addEventListener('click', function () {
                    resultEl.removeChild(item);
                })
        
                userInput.value = '';
            }

            event.preventDefault();
        });

}

