const axios = require('axios')

async function getCapitals () {
    /*const capitalsData = require('./capitals')
    console.log(capitalsData.holanda)*/
    
    const url = 'http://localhost:3000/capitals'
    const response =  await axios.get(url)
    console.log(response.data)

}

getCapitals()