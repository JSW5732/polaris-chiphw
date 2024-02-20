import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "Image";
    this.bodyText = "Body Text";
    this.link = "Link";
    this.borderColor = "Border color";
    this.buttonColor = "Button color";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  max-width: 400px;
  background-color: green;
  margin: 100px;
  border: 1px solid;
  border-radius: 8px;
}

.card img {
  width: 75%;
  height: auto;
}

.card-content {
  padding: 12px;
}

.card-content h2 {
  display:flex;
  margin-top: 0;
}

.details-button {
  display: flex;
  background-color: purple;
  font-color: orange;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 12px;
  transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 800px) and (min-width: 500px) {
  .details-button {
    display: inline-block;
  }
}

@media only screen and (max-width: 500px) {
  .card {
    max-width: 100%;
  }
}
    `;
  }

  render() {
    return html` 



<div id="cardlist" class="card-list"></div>
  <section class="card">
  <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
</meme-maker>
    <div class="card-content">
      <h2>PsU wEb DeSiGn</h2>
      <p>Have you ever wanted to create a cool website or blog to share information with others? Well now you can! Click the details button for more info.</p>
      <a href="https://hax.psu.edu"> 
        <button class="btn">Details</button>
        </a>
  </section>

</body>
</html>
`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      bodyText: { type: String },
      link: { type: String },
      borderColor: { type: String },
      buttonColor: { type: String },
    };
  }
}

function toggleFancy() {
  var fancyCard = document.getElementById("fancy-card");
  fancyCard.classList.toggle("fancy");
  
  var cardDetails = document.getElementById("card-details");
  if (fancyCard.classList.contains("fancy")) {
    cardDetails.open = false;
  } else {
    cardDetails.open = true;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
