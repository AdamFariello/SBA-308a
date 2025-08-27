let imageEl = document.getElementById("image")
const url = "https://random.dog/woof.json"; //"https://random-d.uk/api"
export async function getRandomDog() {

    //TODO: change function to allow .mp4 for dog quoting
    let imageUrl = null;
    do {
        const response = await fetch(url);
        const image = await response.json(); //.text() didnt give obj
        imageUrl = await image.url;
    } while(imageUrl.split(".")[2] == "mp4")

    imageEl.setAttribute("src", imageUrl)
}