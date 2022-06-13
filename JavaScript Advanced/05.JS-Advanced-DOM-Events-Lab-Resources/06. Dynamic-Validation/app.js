function validate() {
    const email=document.getElementById('email');
    email.addEventListener('change',onChange);
    const regex = /^\w*\@(\w*\.\w+)$/gm;


    function onChange() {
        let text=email.value;
        let check=text.match(regex);
        /* if (check===null) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        } */

        check ? email.classList.remove('error') : email.classList.add('error');

    }
}