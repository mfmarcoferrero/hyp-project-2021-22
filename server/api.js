const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    await database.sync({ force: true })
    return {
        
    }
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()

}

runMainApi()


export default app
