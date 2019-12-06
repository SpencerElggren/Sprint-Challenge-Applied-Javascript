
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTopic(topic) {
    const topicHere = document.createElement("div");

    topicHere.classList.add("tab");

    topicHere.textContent = topic;

    return topicHere;
}

const entryP = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        let topArray = response.data.topics;
        topArray.forEach(data => {
            entryP.appendChild(newTopic(data))
        })
    });