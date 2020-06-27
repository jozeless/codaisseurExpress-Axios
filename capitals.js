const express = require('express')

const app = express()


const capitals = {
    colombia: 'bogota',
    holanda: 'la haya',
    peru: 'lima'

}



app.get('/capitals',
(request, response) => {
    console.log('Request recived')
response.send(capitals) //this is converted to a JSON string, thensend it over the internet
}
)

const port = 3000
app.listen(
    port,
    () => console.log(`listen on port :${port}`)
    )