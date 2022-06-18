const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize(process.env.DATABASE_URL)


//Production (use this code when deploying to production in Heroku)
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
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
    section: DataTypes.STRING,
    path: DataTypes.STRING
  })
  const POI = database.define("pointofinterest", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    shortDescription: DataTypes.STRING(10000),
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
    info: DataTypes.STRING(1000),
    timetable: DataTypes.STRING(1000),
    category: DataTypes.STRING,
    link: DataTypes.STRING
  })
  const Event = database.define("event", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    season: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  const Itinerary = database.define("itinerary", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    breed: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  const ServiceType = database.define("serviceType", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
  })
  const Service = database.define("serviceList", {
    type: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    address: DataTypes.STRING,
    hours: DataTypes.STRING,
    img: DataTypes.STRING,
  })
  const ItineraryPoi = database.define("itinerary_poi", {})
  Itinerary.belongsToMany(POI, { through: 'itinerary_poi' })
  POI.belongsToMany(Itinerary, { through: 'itinerary_poi' })
  await database.sync({ force: true })
  return {
    HomePageDetail,
    POI,
    Event,
    Itinerary,
    ServiceType,
    Service,
    ItineraryPoi,
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
        shortDescription: element.shortDescription,
        description: element.description,
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
    const result = await models.Service.findAll({ where: { type: typename } })
    return res.json(result)
  })

  app.get("/itineraries", async (req, res) => {
    const result = await models.Itinerary.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        breed: element.breed,
        img: element.img
      })
    }
    return res.json(filtered)
  })

  app.get("/events", async (req, res) => {
    const result = await models.Event.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        season: element.season,
        img: element.img
      })
    }
    return res.json(filtered)
  })

  app.get('/events/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.Event.findOne({ where: { name: name } })
    return res.json(result)
  })

  app.get('/itineraries/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.Itinerary.findOne({ where: { name: name } })
    return res.json(result)
  })

  app.get('/poisOfItinerary/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.ItineraryPoi.findOne({ where: { itinerary: name } })
    return res.json(result)
  })

  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------
  //                                PAGE DETAILS
  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------

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

  app.get("/attractions-page-details", async (req, res) => {
    const result = await models.POI.findAll()
    const filtered = []
    for (const element of result) {
      if (element.category === "top" || element.category === "museum" || element.link != null) {
        filtered.push({
          name: element.name,
          img: element.img,
          shortDescription: element.shortDescription,
          category: element.category,
          link: element.link
        })
      }
    }
    return res.json(filtered)
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
