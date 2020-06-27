const axios = require ('axios')

async function getData () {
    const url = `http://localhost:4000/json`
    const response = await axios.get(url)
    console.log(response.data.today)

}
getData()