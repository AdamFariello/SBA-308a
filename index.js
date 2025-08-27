import { getRandomDog } from "./dogImageApi.js";
import { randomQuote } from "./quoteApi.js";

function init() {
    randomQuote()
    getRandomDog()
}
init()


let buttonEl = document.getElementById("button")
buttonEl.addEventListener("click", init)