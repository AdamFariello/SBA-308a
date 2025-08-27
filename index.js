const baseUrl = "https://api.quotable.io";


let textEl = document.getElementById("quote")
async function randomQuote() {
    const url = "https://api.quotable.io/quotes/random"

    const response = await fetch(url);
    let result = await response.json();
    let quote = result[0].content;
    textEl.innerText = quote;
}

let imageEl = document.getElementById("image")
const url = "https://random.dog/woof.json"; //"https://random-d.uk/api"
async function getRandomDog() {

    //TODO: change function to allow .mp4 for dog quoting
    let imageUrl = null;
    do {
        const response = await fetch(url);
        const image = await response.json(); //.text() didnt give obj
        imageUrl = await image.url;
    } while(imageUrl.split(".")[2] == "mp4")

    imageEl.setAttribute("src", imageUrl)
}



function init() {
    randomQuote()
    getRandomDog()
}
init()


let buttonEl = document.getElementById("button")
buttonEl.addEventListener("click", init)