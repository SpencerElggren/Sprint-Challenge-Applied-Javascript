// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

function newCard(data) {
    const card = document.createElement("div"),
        head = document.createElement("div"),
        author = document.createElement("div"),
        imgCont = document.createElement("div"),
        image = document.createElement("img"),
        name = document.createElement("span");

    card.classList.add("card");
    head.classList.add("headline");
    author.classList.add("author");
    imgCont.classList.add("img-container");

    card.appendChild(head);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(image);
    author.appendChild(name);

    head.textContent = data.headline;
    image.src = data.authorPhoto;
    name.textContent = data.authorName;

    return card;
}

let cardCont = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(function (response) {
        response.data.articles['bootstrap'].forEach(data =>{
            cardCont.appendChild(newCard(data))
        });
        response.data.articles['javascript'].forEach(data =>{
            cardCont.appendChild(newCard(data))
        });
        response.data.articles['jquery'].forEach(data =>{
            cardCont.appendChild(newCard(data))
        });
        response.data.articles['node'].forEach(data =>{
            cardCont.appendChild(newCard(data))
        });
        response.data.articles['technology'].forEach(data =>{
            cardCont.appendChild(newCard(data))
        })
    });