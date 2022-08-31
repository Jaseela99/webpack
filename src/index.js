import generateJoke from "./generateJoke";
import "./styles/main.scss"
import laughing from "./assets/hi.gif"

console.log(3)

generateJoke()
const hiImg = document.getElementById('hiImg')
hiImg.src=laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
