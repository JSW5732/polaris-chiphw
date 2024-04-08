import { LitElement, html, css } from 'lit';

export class Campus Alert extends LitElement 

    static get tag() {
        return 'campus-alert';
      }
     
      constructor() {
        super();
        this.title = "Campus Alert";
        this.image = "Image";
        this.bodyText = "body";
        this.link = "Link";
        this.date = "Date";
        this.time = "time";
      }

      static get styles()
        return css`


body {
    font-family: Arial, sans-serif;
  }
  
  .modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgba(0,0,0,0.4); 
    padding-top: 60px;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }


  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('alertModal');
    var closeBtn = document.getElementsByClassName('close')[0];
  
    modal.style.display = 'block';
  
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });