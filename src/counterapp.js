 tag(); {
  return 'counterapp';
}

constructor(); {
  super();
  this.title = "My card";
  this.image = "Image";
  this.bodyText = "Body Text";
  this.link = "Link";
  this.borderColor = "Border color";
  this.buttonColor = "Button color";
}

styles() 
  return css`
    :host {
      display: block;
    }
    body {
margin: 0;
padding: 0;
box-sizing: border-box;
}



render(); {
  <return> html` 
<div class="counterapp"></div>
<section class="counter">
<confetti-container id="confetti"></confetti-container>

    <div class="counter-content"></div>
      <h2>Super cool counter</h2>
      <p>Click + to add to the number and - to subtract.</p>
        <button class="+btn">+</button>
        <button class="-btn">-</button>
        
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
