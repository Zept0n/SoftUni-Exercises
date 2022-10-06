function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const phonebookList = document.getElementById('phonebook');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onLoad() {
        phonebookList.textContent = '';//replaceChildren(); innerHTML='';
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
        const phonebook = Object.entries(data);
        for (let [id, { person, phone }] of phonebook) {
            const li = document.createElement('li');
            li.textContent = `${person}: ${phone}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            phonebookList.appendChild(li);
            deleteBtn.addEventListener('click', onDelete)

            async function onDelete() {
                const responce = await fetch(`${url}/${id}`, {
                    method: 'delete'
                });
                //add error handling?
                li.remove();
                deleteBtn.removeEventListener('click', onDelete);
            }
        }
    }

    async function onCreate() {
        const responce = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "person": person.value,
                "phone": phone.value
            })
        });
        onLoad();
        //add error handling?

        person.value = '';
        phone.value = '';
    }
}

attachEvents();