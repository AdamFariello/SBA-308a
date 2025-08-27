const baseUrl = "https://api.quotable.io";


async function randomQuote() {
    const url = "https://api.quotable.io/quotes/random"

    const response = await fetch(url);
    let result = await response.json();
    //console.log(result)
    //console.log(JSON.stringify(result, null, "\t"))

    //TODO: work around this returning promises
    //let quote = await result[0].content;
    //console.log(quote)
    return result[0].content;
}

async function getRandomDog() {
    const url = "https://random.dog/woof.json";
    //const url = "https://random-d.uk/api"
    const response = await fetch(url);
    
    const image = await response.json(); //.text() didnt give obj
    const imageUrl = await image.url;
    return imageUrl;
}
getRandomDog()