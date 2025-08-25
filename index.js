const baseUrl = "https://musicbrainz.org/ws/2/";
const jsonArg = "&fmt=json"

async function example() {
    let url = baseUrl + "area/45f07934-675a-46d6-a577-6f8637a411b1?inc=aliases";
    url += jsonArg;
    
    const response = await fetch(url);
    //const data = response.json();
    //console.log(data);
    console.log(response)

    let result = await response.json();
    console.log(result)
    console.log(JSON.stringify(result, null, "\t"))
}
example();


