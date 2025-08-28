import { getRandomDog } from "./dogImageApi.js";
import { randomQuote } from "./quoteApi.js";

function init() {
    randomQuote();
    getRandomDog();
}
init();


let buttonEl = document.getElementById("button");
buttonEl.addEventListener("click", init);



// The idea below was that I would use ____ api.
// I then learned about cors
// I kept changing apis until I had the idea to use pastebin's api, and it seemed promising
// Cors again, this time I didn't want to run away. 
// That's the mess bellow.
// The only real function was newPastePartProxy()

let url = "https://pastebin.com/api/api_post.php";
const apiKey = "KMAIDMlp3xnY8HV3_YZ-E5OnA6u3qBnz";
const pasteCode = `"Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish."`

async function newPasteNoProxy() {
    //document.domain = "pastebin.com";
    let response = null;
    try {
        response = await fetch(url, {
            headers:{
                "api_dev_key":apiKey,
                "api_option": "paste",
                "api_paste_code": pasteCode,
                //"Access-Control-Allow-Origin": "*",
                //"Access-Control-Allow-Methods": "POST, GET", 
                //"Access-Control-Allow-Headers": "Content-Type"
            },
            method: "POST",
            //name: "Access-Control-Allow-Origin"
        });        
        console.log(response);
    } catch (e) {
        console.log(e);
        console.log(response);
    }
}
//newPasteNoProxy();

async function newPastePartProxy() {
    //document.domain = "pastebin.com";
    let response = null;
    //let url = "https://pastebin.com/api/api_post.php/";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //const proxy = "https://corsproxy.io/";
    //url = proxy + url;
    
    let baseurl = "https://pastebin.com/api/api_post.php";
    //let url = `${proxy}"${baseurl}"`
    let url = proxy + baseurl;

    //url = "https://corsproxy.io/" + encodeURIComponent(url);
    
    try {
        response = await fetch(url, {
            headers:{
                "api_dev_key":apiKey,
                "api_option": "paste",
                "api_paste_code": pasteCode,
                //"Access-Control-Allow-Origin": "*",
                //"Access-Control-Allow-Methods": "POST, GET", 
                //"Access-Control-Allow-Headers": "Content-Type",
                
                //origin: proxy,
                origin: "https://pastebin.com/api/api_post.php/",
                //"x-requested-with":"accept",
            },
            method: "POST",
            //name: "Access-Control-Allow-Origin"
        });        
        console.log(response)

        let result = await response.text();
        console.log(result);
    } catch (e) {
        console.log(e);
        console.log(response);
    }
}
//newPastePartProxy();


async function newPasteWProxy() {
    //NOTE: if you want to use this run in the root dir:
    //      node proxy-server/index.js
    let response = null;
    const url = "http://localhost:3000/api";
    try {
        response = await fetch(url, {
            headers:{
                "api_dev_key":apiKey,
                "api_option": "paste",
                "api_paste_code": pasteCode,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET", 
                "Access-Control-Allow-Headers": "Content-Type"
            },
            method: "POST",
            //name: "Access-Control-Allow-Origin"
        });        
        console.log(response);
    } catch (e) {
        console.log(e);
        console.log(response);
    }
}
//newPasteWProxy();


/*
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    console.log(xhr)
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
var request = createCORSRequest("get", url);
console.log(request);
/*
if (request){
    request.onload = function() {
        // ...
    };
    request.onreadystatechange = handler;
    request.send();
}
*/