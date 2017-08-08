console.log('cards.js');

var input = document.getElementById("inputText");
var create = document.getElementById("createBtn");
var container = document.getElementById("container");
var cardsArray = [];
var card ;

function deleteCard(delCard) {
  let parent = delCard.parentNode;
  parent.removeChild(delCard);
}

create.addEventListener("click", function() {
  
  card = document.createElement("article");
  card.classList.add("cardClass");
  card.innerHTML= `
    <h2>${input.value}</h2>
    <input type="button" value="Delete" class="delete-btn">
    `;

  container.appendChild(card);
  input.value = '';

  var delBtn = document.getElementsByClassName("delete-btn");
  cardsArray.push(card);
    
});

container.addEventListener("click",()=>{
  if (event.target.classList == "delete-btn") {
    deleteCard(this.event.target.parentNode);
  }
});