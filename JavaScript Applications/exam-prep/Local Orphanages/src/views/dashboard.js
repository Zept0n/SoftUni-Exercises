import { getAllToys } from "../api/toys.js";
import { html } from "../lib.js";


const dashboardTemplate = (toys) => html`<section id="dashboard-page">
<h1 class="title">All Posts</h1>

<!-- Display a div with information about every post (if any)-->
<div class="all-posts">
${toys.length==0
    ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
    : toys.map(toyCard)}	
</div>

<!-- Display an h1 if there are no posts -->

</section>
`;

const toyCard=(toy)=>html`<div class="post">
<h2 class="post-title">${toy.title}</h2>
<img class="post-image" src=${toy.imageUrl} alt="Kids clothes">
<div class="btn-wrapper">
    <a href="/dashboard/${toy._id}" class="details-btn btn">Details</a>
</div>
</div>`

export async function dashboardView(ctx) {
    const toys=await getAllToys();
    ctx.render(dashboardTemplate(toys));


    //ctx.render('welcome');

}