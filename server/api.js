const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/TheCity")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Town = database.define("town", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const POI = database.define("pointofinterest", {
        name: DataTypes.STRING,
            latitude: DataTypes.NUMBER,
            longitude: DataTypes.NUMBER,
            description: DataTypes.STRING,
            img: DataTypes.STRING
    })
    const Event = database.define("event", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Itinerary = database.define("itinerary", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const ServiceType = database.define("serviceType", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        Town,
        POI, 
        Event, 
        Itinerary, 
        ServiceType
    }
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

}

runMainApi()


export default app
