const baseUrl = "https://api.quotable.io";


async function randomQuote() {
    const url = "https://api.quotable.io/quotes/random"

    const response = await fetch(url);
    let result = await response.json();
    //console.log(result)
    //console.log(JSON.stringify(result, null, "\t"))

    let quote = result[0].content;
    console.log(quote)

    //let author = result[0].author;
    //console.log(author)
}
randomQuote();