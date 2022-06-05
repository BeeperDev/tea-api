const express = require('espress')
const app = express()

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(POST, (request, response) => {
    console.log(`Server is up and `)
})