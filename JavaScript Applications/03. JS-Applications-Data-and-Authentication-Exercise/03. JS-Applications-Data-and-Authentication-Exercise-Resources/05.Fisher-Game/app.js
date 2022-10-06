function main() {
    const loginForm = document.querySelectorAll('#login')[1];
    const registerForm = document.querySelectorAll('#register')[1];
    const loginNav = document.querySelectorAll('#login')[0];
    const registerNav = document.querySelectorAll('#register')[0];
    const logoutNav = document.getElementById('logout');
    const sectionRegister = document.getElementById('register-view');
    const sectionLogin = document.getElementById('login-view')
    const fieldSet = document.getElementById('main');
    const currentUserName = document.querySelector('.email span');
    const addForm = document.getElementById('addForm')
    const loadBtn = document.querySelector('.load');
    document.querySelector('main').style.display = 'none';
    loginForm.addEventListener('submit', onLogin);
    registerForm.addEventListener('submit', onRegister);
    //loadBtn.addEventListener('click',onLoadClick);
    loginNav.addEventListener('click', onLoginNav)
    registerNav.addEventListener('click', onRegisterNav)
    logoutNav.addEventListener('click', onLogout)



    checkLogin();


    function onLoginNav() {
        checkLogin();
        sectionLogin.style.display = 'flex';
    }

    function onRegisterNav() {
        checkLogin();
        sectionRegister.style.display = 'flex';
    }

    async function onLogout() {
        const url = `http://localhost:3030/users/logout`;

        fetch(url, {
            headers: {
                //X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-Authorization, X-Admin
                'X-Authorization': sessionStorage.getItem('accessToken')
            }
        })
        sessionStorage.clear();
        checkLogin();
    }

    function checkLogin() {
        sectionRegister.style.display = 'none';
        sectionLogin.style.display = 'none';
        fieldSet.style.display = 'none';
        addForm.style.display = 'none';
        if ((sessionStorage.accessToken != undefined) && sessionStorage.accessToken != null) {
            logoutNav.style.display = 'inline-block';
            currentUserName.textContent = 'user';
            registerNav.style.display = 'none'
            loginNav.style.display = 'none'
        } else {
            logoutNav.style.display = 'none';
            currentUserName.textContent = 'guest';
            registerNav.style.display = 'inline-block'
            loginNav.style.display = 'inline-block'
        }
        //addForm.style.display = 'block'
    }

    async function onRegister(ev) {
        ev.preventDefault();
        try {
            const url = `http://localhost:3030/users/register`;
            const formData = new FormData(registerForm);
            if (formData.get('email') == '' || formData.get('password') == '') {
                throw new Error('All fields are required!');
            }
            if (formData.get('password') != formData.get('rePass')) {
                throw new Error('Passwords must match!')
            }

            const responce = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            const data = await responce.json();
            if (responce.ok == false) {
                throw new Error(data.message);
            }
            sessionStorage.setItem('accessToken', data.accessToken);
        } catch (error) {
            alert(error);
        }
        checkLogin();
    }


    async function onLogin(ev) {
        ev.preventDefault();
        try {
            const url = `http://localhost:3030/users/login`;
            const formData = new FormData(loginForm);
            if (formData.get('email') == '' || formData.get('password') == '') {
                throw new Error('All fields are required!');
            }
            const responce = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            console.log(responce)
            const data = await responce.json();
            if (responce.ok == false) {
                throw new Error(data.message);
            }
            sessionStorage.setItem('accessToken', data.accessToken);

        } catch (error) {
            alert(error);
        }
        checkLogin();
    }
}

main();