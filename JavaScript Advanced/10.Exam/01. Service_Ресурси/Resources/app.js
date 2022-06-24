window.addEventListener('load', solve);

function solve() {
    const typeProduct = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    const sendButton = document.querySelector('form button');
    const clearButton=document.querySelector('.clear-btn');

    const receivedOrdersList = document.getElementById('received-orders')
    const completedOrdersList = document.getElementById('completed-orders')

    let arrayOfFinished=[];
    sendButton.addEventListener('click', onClick)
    clearButton.addEventListener('click', onClear)

    function onClick(ev) {
        ev.preventDefault();

        const typeProductValue = typeProduct.value;
        const descriptionValue = description.value;
        const clientNameValue = clientName.value;
        const clientPhoneValue = clientPhone.value;

        if ([descriptionValue, clientNameValue, clientPhoneValue].some((element) => element == '')) {
            return;
        }

        typeProduct.value = 'Computer';
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

        const div = createEl('div', undefined, 'container');
        div.appendChild(createEl('h2', `Product type for repair: ${typeProductValue}`))
        div.appendChild(createEl('h3', `Client information: ${clientNameValue}, ${clientPhoneValue}`))
        div.appendChild(createEl('h4', `Description of the problem: ${descriptionValue}`))
        const startButton = createEl('button', `Start repair`, 'start-btn');
        const finishButton = createEl('button', `Finish repair`, 'finish-btn');
        finishButton.setAttribute('disabled',true);
        div.appendChild(startButton);
        div.appendChild(finishButton);
        receivedOrdersList.appendChild(div);

        startButton.addEventListener('click', onStart)
        
        function onStart() {
            //startButton.disabled=true;
            //finishButton.disabled=false;
            startButton.removeEventListener('click', onStart)
            finishButton.addEventListener('click', onFinish);

            startButton.setAttribute('disabled', '');
            finishButton.removeAttribute('disabled');
        }

        function onFinish() {
            completedOrdersList.appendChild(div);
            div.removeChild(startButton);
            div.removeChild(finishButton);
            arrayOfFinished.push(div);
        }
    }

    function onClear() {
        for(let index=0;index<arrayOfFinished.length;index++) {
            completedOrdersList.removeChild(arrayOfFinished[index]);
        }
    }

    function createEl(type, textContent, classType) {
        const element = document.createElement(type);
        if (textContent != undefined) {
            element.textContent = textContent
        }
        if (classType != undefined) {
            element.classList.add(classType);
        }
        return element;
    }
}