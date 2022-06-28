function solve() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const hireButton = document.getElementById('add-worker');
    const tBody = document.getElementById('tbody');
    const salarySum = document.getElementById('sum');
    hireButton.addEventListener('click', onHire)


    function onHire(ev) {
        ev.preventDefault();
        const fnameValue = fname.value;
        const lnameValue = lname.value;
        const emailValue = email.value;
        const birthValue = birth.value;
        const positionValue = position.value;
        const salaryValue = salary.value;
        if ([fnameValue, lnameValue, emailValue, birthValue, positionValue, salaryValue].some((element) => element == '')) {
            return;
        }
        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        const tr = createEl('tr');
        tr.appendChild(createEl('td', fnameValue));
        tr.appendChild(createEl('td', lnameValue));
        tr.appendChild(createEl('td', emailValue));
        tr.appendChild(createEl('td', birthValue));
        tr.appendChild(createEl('td', positionValue));
        tr.appendChild(createEl('td', salaryValue));
        const td = createEl('td');
        // td.appendChild(createEl('button','Fired','fired'))
        // td.appendChild(createEl('button','Edit','edit'))
        const firedButton = createEl('button', 'Fired', 'fired');
        const editButton = createEl('button', 'Edit', 'edit');
        td.appendChild(firedButton);
        td.appendChild(editButton);
        tr.appendChild(td);
        tBody.appendChild(tr);
        salarySum.textContent = (Number(salarySum.textContent) + Number(salaryValue)).toFixed(2);

        firedButton.addEventListener('click', onFired);
        editButton.addEventListener('click', onEdit);

        function onFired() {
            tBody.removeChild(tr);
            salarySum.textContent = (Number(salarySum.textContent) - Number(salaryValue)).toFixed(2);
        }

        function onEdit() {
            fname.value=fnameValue;
            lname.value=lnameValue;
            email.value=emailValue;
            birth.value=birthValue;
            position.value=positionValue;
            salary.value=salaryValue;
            tBody.removeChild(tr);

            salarySum.textContent = (Number(salarySum.textContent) - Number(salaryValue)).toFixed(2);
        }
    }
    //console.log(fname,lname,email,birth,position,salary,hireButton)

    function createEl(type, textContent, classType) {
        const element = document.createElement(type);
        element.textContent = textContent
        if (classType != undefined) {
            element.classList.add(classType);
        }
        return element;
    }
}
solve()