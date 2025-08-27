const url = "https://api.quotable.io/quotes/random"
let textEl = document.getElementById("quote")
export async function randomQuote() {
    
    const response = await fetch(url);
    let result = await response.json();
    let quote = result[0].content;
    textEl.innerText = quote;
}