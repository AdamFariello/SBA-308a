const baseUrl = "https://api.quotable.io";


//let textArea = document.getElementById("textarea")
async function randomQuote() {
    const url = "https://api.quotable.io/quotes/random"

    const response = await fetch(url);
    let result = await response.json();
    let quote = result[0].content;
    textArea.innerText = quote;
}
//randomQuote()

let imageEl = document.getElementById("image")
async function getRandomDog() {
    const url = "https://random.dog/woof.json";
    //const url = "https://random-d.uk/api"
    const response = await fetch(url);
    
    const image = await response.json(); //.text() didnt give obj
    const imageUrl = await image.url;

    imageEl.setAttribute("src", imageUrl)
}
getRandomDog()