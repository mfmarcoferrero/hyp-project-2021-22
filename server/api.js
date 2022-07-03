const express = require('express')
const app = express()
const { Sequelize, Op, DataTypes } = require("sequelize")
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
  const HomePageDetail = database.define("homepage_detail", {
    name: DataTypes.STRING,
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
    section: DataTypes.STRING,
    path: DataTypes.STRING
  })
  const POI = database.define("point_of_interest", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    short_description: DataTypes.STRING(10000),
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
    info: DataTypes.STRING(1000),
    timetable: DataTypes.STRING(1000),
    category: DataTypes.STRING,
    link: DataTypes.STRING,
  })
  const Event = database.define("event", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    season: DataTypes.STRING,
    img: DataTypes.STRING(1000),
    location: DataTypes.STRING(10000),
    when: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    type: DataTypes.STRING
  })
  const Itinerary = database.define("itinerary", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
    maplink: DataTypes.STRING
  })
  const ServiceType = database.define("service_type", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING(10000),
    img: DataTypes.STRING,
  })
  const Service = database.define("services", {
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
  const Message = database.define("message", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING(10000)
  })

  const ItineraryPoi = database.define("itinerary_poi", {
    poi_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    itinerary_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
  })

  await database.sync({ force: true })
  return {
    HomePageDetail,
    POI,
    Event,
    Itinerary,
    ServiceType,
    Service,
    ItineraryPoi,
    Message
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
        category: element.category
      })
    }
    return res.json(filtered)
  })

  app.get('/pois/:name', async (req, res) => {
    const name = req.params.name
    const result = await models.POI.findOne({ where: { name: name } })
    return res.json(result)
  })

  // app.get('/poisByItinerary/:name', async (req, res) => {
  //   const name = req.params.name
  //   const result = await models.POI.findAll({ where: { itineraryName: { [Op.contains]: [name] } } })
  //   return res.json(result)
  // })

  app.get("/services", async (req, res) => {
    const result = await models.ServiceType.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
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
        img: element.img,
        maplink: element.maplink
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
        img: element.img,
        location: element.location,
        when: element.when,
        date: element.date,
        type: element.type
      })
    }
    return res.json(filtered)
  })

  app.get("/eventsByPlace/:placename", async (req, res) => {
    const placename = req.params.placename
    const result = await models.Event.findAll({ where: { location: placename } })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        season: element.season,
        img: element.img,
        location: element.location,
        when: element.when,
        date: element.date,
        type: element.type
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
    const nameItinerary = req.params.name
    const query = 'SELECT name, short_description, img FROM point_of_interests as p JOIN itinerary_pois as ip ON name = poi_name WHERE itinerary_name = :name';

    await database.query(query,
      {
                replacements: {
                  name: nameItinerary
                },
                nest: true
      }).then(ret => {
      return res.json(ret)
    }).catch(err => {
      console.log(err)
    })
  })

  app.get('/itinerariesByPlace/:name', async (req, res) => {
    const name = req.params.name
    const query = 'SELECT i.name, i.description, i.img FROM itineraries as i JOIN itinerary_pois as ip ON name = itinerary_name WHERE poi_name = :name';

    await database.query(query,
      {
        replacements: {
          name: name
        },
        nest: true
      }).then(ret => {
      return res.json(ret)
    }).catch(err => {
      console.log(err)
    })
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
          shortDescription: element.short_description,
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


  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------
  //                                    MESSAGE API
  //-----------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------

  app.post("/message", async (req, res) => {
    const { name, email, message, commercialFlag } = req.body
    const messageObj = models.Message.build({
      name,
      email,
      message
    })
    await messageObj.save()
    return res.sendStatus(200)
  })

}

runMainApi()

export default app
