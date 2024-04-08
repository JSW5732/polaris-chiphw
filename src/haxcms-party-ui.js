import "@lrnwebcomponents/rpg-character/rpg-character.js";
import confetti from "https://esm.run/canvas-confetti@1";


const addBtn = document.getElementById("haxcms-party-ui-add-btn");
addBtn.addEventListener("click", addRPG);

const saveParty = document.getElementById("haxcms-party-ui-save-party");
saveParty.addEventListener("click", save);

const RPGS = [];
let counter = 0;

function addRPG() {
    if (isAllLowercaseOrNumbs(document.getElementById("haxcms-party-ui-text-input").value)){
        document.getElementById("haxcms-party-ui-party").innerHTML = document.getElementById("haxcms-party-ui-party").innerHTML + "<div id = "+counter+"><rpg-character hat=\"random\" seed=\"haxtheweb\"></rpg-character>" + document.getElementById("haxcms-party-ui-text-input").value +  "<button class=\"DeleteUserbtn\" id = "+document.getElementById("haxcms-party-ui-text-input").value+">Delete User</button></div>";
        RPGS.push(document.getElementById("haxcms-party-ui-text-input").value);

        var buttons = document.getElementsByClassName("DeleteUserbtn");
        for (let button of buttons) {
          button.addEventListener("click", delRPG);
        }
        
        counter ++;
        const addBtn = document.getElementById("haxcms-party-ui-add-btn");
        addBtn.addEventListener("click", addRPG);
    }
    else{
        alert("Only lowercase or numbers for name")
    }
}

function delRPG(event){
    if (event.target.classList.contains("DeleteUserbtn")) {
        event.target.parentNode.remove();
      }
    RPGS.splice(RPGS.indexOf(event.target.id),1);

}

function save(){
    confetti({
        particleCount: 150,
        spread: 60
      });
      const party = RPGS.map(saveNames);
      alert(party);
}

function saveNames(name){
    return name;
}
function isAllLowercaseOrNumbs(str) {
    var regex = /^[a-z0-9]+$/;
  
    return regex.test(str);
  }