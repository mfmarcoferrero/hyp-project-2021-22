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
        latitude: DataTypes.FLOAT,
        longitude: DataTypes.FLOAT,
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

    app.get("/pois", async (req, res) => {
        const result = await models.POI.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                description: element.description,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    app.get('/pois/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.POI.findOne({ where: { id } })
        return res.json(result)
    })
}

runMainApi()


export default app
