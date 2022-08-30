import axios from "axios"

const generteJoke=()=>{
const config={
    headers:{
        Accept:'applicant/json'
    }
}
axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  })
}
export default generteJoke