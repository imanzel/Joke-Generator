let jokeDiv = document.getElementById("joke");
let button = document.getElementById("button");
button.addEventListener("click", () =>{
    console.log("clicked");
    generateJoke();
});
async function generateJoke(){
    let response = await fetch("https://icanhazdadjoke.com",{
        headers: {
        "Accept": "application/json"
        }
    });
    let joke = await response.json();
    console.log(joke);
    jokeDiv.textContent = joke.joke;
    console.log(jokeDiv);
}