import { register } from "../api/users.js";
import { html } from "../lib.js";


const registerTemplate = (onSubmit) => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));
    //ctx.render('welcome');
    async function onSubmit(event) {
        event.preventDefault();
        const formData=new FormData(event.target);

        const email=formData.get('email').trim();
        const password=formData.get('password').trim();
        const repass=formData.get('re-password').trim();
        

        if (email==''||password=='') {
            return alert('All fields are required!');
        }


        if (password!=repass) {
            return alert('Passwords don\'t match');
        }
    
        await register(email,password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard'); 
    }
}