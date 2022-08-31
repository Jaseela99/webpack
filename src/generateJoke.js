import axios from "axios"

const generateJoke=()=>{
const config={
    headers:{
        Accept:'applicant/json'
    }
}
axios.get('https://icanhazdadjoke.com', config).then((data)=>{return console.log(data.json())})
    // document.getElementById('joke').innerHTML = data.data.joke)}
  
}
export default generateJoke