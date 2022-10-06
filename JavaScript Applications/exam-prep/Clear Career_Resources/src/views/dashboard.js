import { getAllOffers } from "../api/offers.js";
import { html } from "../lib.js";


const dashboardTemplate = (offers) => html`
<section id="dashboard">
          <h2>Job Offers</h2>
          ${offers.length == 0
        ? html`<h2>No offers yet.</h2>`
        : offers.map(dashboardCard)}	
          <!-- Display an h2 if there are no posts -->
         
        </section>`;


const dashboardCard = (offer) => html`
<div class="offer">
            <img src="${offer.imageUrl}" alt="./images/example3.png" />
            <p>
              <strong>Title: </strong
              ><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/offer/${offer._id}">Details</a>
          </div>`
export async function dashboardView(ctx) {

    const offers = await getAllOffers();

    ctx.render(dashboardTemplate(offers));
    //ctx.render('welcome');

}