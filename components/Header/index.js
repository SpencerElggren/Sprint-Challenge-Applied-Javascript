// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const head = document.createElement("div"),
        date = document.createElement("span"),
        title = document.createElement("h1"),
        temp = document.createElement("span");

    head.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");

    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    date.textContent = "March 20, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = " 98°";

    return head;
}

let newHead = Header();

document.querySelector(".header-container").appendChild(newHead);