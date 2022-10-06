import { logout } from './api/users.js';
import {page,render} from './lib.js';
import { getUserData } from './util.js';
import { dashboardView } from './views/dashboard.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const main=document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click',onLogout);

page(decorateContext);
page('/',dashboardView);
page('/dashboard/:id',()=>console.log('details'));
page('/login',loginView);
page('/register',registerView);
page('/create',()=>console.log('create'));




//start application
updateNav()
page.start();


function decorateContext(ctx,next) {
    ctx.render=renderMain;
    ctx.updateNav=updateNav;
    next();
}

function renderMain(templateResult) {
    render(templateResult,main);
}


function updateNav() {
    const userData=getUserData();

    if (userData) {
        document.getElementById('user').style.display='block'
        document.getElementById('guest').style.display='none'
        
    } else {
        document.getElementById('user').style.display='none';
        document.getElementById('guest').style.display='block';
    }
}


function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}