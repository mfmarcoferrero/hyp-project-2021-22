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
    // HTTP GET api that returns all the pois in our fake database
    app.get("/pois", async (req, res) => {
        const filtered = []
        filtered.push({
            name: "duomo",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            description: "Il duomo di milano",
            id: 23,
        })
        return res.json(filtered)
    })
}

runMainApi()


export default app
