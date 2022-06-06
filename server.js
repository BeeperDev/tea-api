const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin': 'yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': true,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(tea)
})

app.get('/api/:name', (request, response) => {
    const teaChoice = request.params.name.toLowerCase()
    if(tea[teaChoice]){
        response.json(tea[teaChoice])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(PORT, (request, response) => {
    console.log(`Server is running on port ${PORT}`)
})