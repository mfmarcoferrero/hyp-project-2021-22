const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/TheCity")


// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })


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
        img: DataTypes.STRING,
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
    const SERVICETYPES = database.define("serviceType", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const SERVICE = database.define("serviceList", {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        hours: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        Town,
        POI,
        Event,
        Itinerary,
        SERVICETYPES,
        SERVICE
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

    app.get("/services", async (req, res) => {
        const result = await models.SERVICETYPES.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                description: element.description,
                id: element.id,
                pins: element.pins,
            })
        }
        return res.json(filtered)
    })

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.SERVICETYPES.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/service/:typename', async (req, res) => {
        const typename = req.params.typename
        const result = await models.SERVICE.findAll({ where: { type: typename }})
        return res.json(result)
    })

    app.get("/city-details", async (req, res) => {
        const result = await models.POI.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                description: element.description,
            })
        }
        return res.json(filtered)
    })
}

runMainApi()


export default app
