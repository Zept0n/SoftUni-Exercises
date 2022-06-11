function addItem() {
    let text=document.getElementById('newItemText').value;
    let li=document.createElement("li");
    li.textContent=text;
    let deleteBtn=document.createElement("a");
    deleteBtn.href='#';
    deleteBtn.textContent='[Delete]';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click',onDelete);

    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value='';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}

