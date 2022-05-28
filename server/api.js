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
    const HomePageDetail = database.define("homePageDetail", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
        section: DataTypes.STRING,
        path: DataTypes.STRING
    })
    const POI = database.define("pointOfInterest", {
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
    const ServiceType = database.define("serviceType", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Service = database.define("serviceList", {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        hours: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        HomePageDetail,
        POI,
        Event,
        Itinerary,
        ServiceType,
        Service
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

    app.get('/pois/:name', async (req, res) => {
        const name = req.params.name
        const result = await models.POI.findOne({ where: { name: name } })
        return res.json(result)
    })

    app.get("/services", async (req, res) => {
        const result = await models.ServiceType.findAll()
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

    app.get('/services/:name', async (req, res) => {
        const name = req.params.name
        const result = await models.ServiceType.findOne({ where: { name: name } })
        return res.json(result)
    })

    app.get('/service/:typename', async (req, res) => {
        const typename = req.params.typename
        const result = await models.Service.findAll({ where: { type: typename }})
        return res.json(result)
    })

    app.get("/home-page-details", async (req, res) => {
        const result = await models.HomePageDetail.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                img: element.img,
                description: element.description,
                section: element.section,
                path: element.path
            })
        }
        return res.json(filtered)
    })
}

runMainApi()


export default app
