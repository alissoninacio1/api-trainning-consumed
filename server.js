const cors = require('cors')
const express = require('express');
const app  = express();
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

    try {
        //extraindo o data de dentro do response
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        //console.log(data) //como estamos no servidor, este console sera executado no terminal
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})


//o fetch is do browser, mas no servidor a gente nao tem o fetch, para consumir uma API no backend, usamos o AXIOS.

app.listen('4567')