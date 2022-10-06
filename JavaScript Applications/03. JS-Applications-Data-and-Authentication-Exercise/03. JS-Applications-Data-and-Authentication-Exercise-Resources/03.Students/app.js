async function main() {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const tableBody = document.querySelector('tbody');
    const form = document.getElementById('form');

    form.addEventListener('submit', onFormSubmit);
    load();

    async function load() {
        tableBody.textContent='';
        const responce = await fetch(url);
        const data = await responce.json();

        console.log(data);

        const entries = Object.entries(data);

        for (let [id, { firstName, lastName, facultyNumber, grade }] of entries) {
            const tr = document.createElement('tr');
            const td0 = document.createElement('td')
            td0.textContent = firstName;
            const td1 = document.createElement('td')
            td1.textContent = lastName;
            const td2 = document.createElement('td')
            td2.textContent = facultyNumber;
            const td3 = document.createElement('td')
            td3.textContent = grade;

            tr.append(td0, td1, td2, td3);
            tableBody.appendChild(tr);
        }
    }


    async function onFormSubmit(ev) {
        ev.preventDefault();

        try {
            const formData = new FormData(form);

            console.log(formData.get('firstName'));
            if (isNaN(formData.get('grade'))) {
                throw new Error('Grade must be a number!');
            }

            const formFields = {
                firstName: formData.get('firstName'), //- string, non-empty
                lastName: formData.get('lastName'),//- string, non-empty
                facultyNumber: formData.get('facultyNumber'), //- string of numbers, non-empty
                grade: Number(formData.get('grade'))//- number
            }

            //console.log(formFields)

            const responce = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFields)
            })
            console.log(responce);

            load();

        } catch (error) {
            console.log(error);
        }
    }
}

main();