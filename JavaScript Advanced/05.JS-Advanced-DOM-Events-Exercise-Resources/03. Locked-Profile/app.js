function lockedProfile() {
    console.log('TODO...')

    //get reference to show more buttons
    //const showBtn1=document.getElementById('')

    //get main reference 
    const main = document.getElementById('main');
    main.addEventListener('click', showHide);
    //get reference to lock radio buttons

    function showHide(ev) {
        let div = ev.target.previousSibling.previousSibling;
        let locked=ev.target.parentNode.querySelectorAll('[type="radio"]')[0].checked
        if (locked) {
            return;
        }
        if (ev.target.tagName == "BUTTON") {
            if (ev.target.textContent == 'Show more') {
                ev.target.textContent = 'Hide it';
                div.style.display = 'inline';
            } else if (ev.target.textContent == 'Hide it') {
                ev.target.textContent = 'Show more';
                div.style.display = 'none';
            }
        }

    }
}