function addItem() {
    const text=document.getElementById('newItemText');
    const value=document.getElementById('newItemValue');
    const option=document.createElement('option');
    const optionMenu=document.getElementById('menu');
    option.textContent=text.value;
    option.value=value.value;
    optionMenu.appendChild(option);
    text.value='';
    value.value='';
}