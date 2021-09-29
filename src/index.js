const express = require('express')
// const {sequelize} = require('./db')
const { getAllUsers, getSingleUser, createUser } = require('./src/usuarios/index')



const app = express()
app.use(express.json());
app.use(express.static('public'))

app.get('/api/users', async (request, response) => {
    response.json(await getAllUsers())
})

app.get('/api/users/:id', async (request, response) => {
    response.json(await getSingleUser(request.params.id))
})

app.post('/api/users', async (request, response) => {
    try {
        response.json(await createUser(request.body))
    } catch (e) {
        response.json({err: e.toString()})
    }
    
})

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


