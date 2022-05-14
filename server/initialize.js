export default async (models) => {
    const poiList = [
        {
            name: "Duomo di Milano",
            latitude: 45.464211,
            longitude: 9.191383,
            description: "Details about Duomo ",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Garibaldi",
            latitude: 45.482500,
            longitude: 9.191020,
            description: "Details about Garibaldi",
            img: "https://s1.gifyu.com/images/garibaldi.jpg",
        },
        {
            name: "CityLife",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about CityLife",
            img: "https://s1.gifyu.com/images/citylife.jpg",
        },
        {
            name: "Castello Sforzesco",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about Castello",
            img: "https://s1.gifyu.com/images/castello.jpg",
        },
        {
            name: "Brera",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about Brera",
            img: "https://s1.gifyu.com/images/brera.jpg",
        },
    ]
    const serviceList = [
        {
            name: "Medical Services",
            description: "medical services description",
            pins: [
                { x : 45.577849, y : 9.156383 },
                { x : 45.677849, y : 9.256383 },
                { x : 45.477849, y : 9.456383 }
            ],
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Cultural Services",
            description: "cultural services description",
            pins: [
                { x : 45.577849, y : 9.156383 },
                { x : 45.677849, y : 9.256383 },
                { x : 45.477849, y : 9.456383 }
            ],
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Thematic and leisure parks",
            description: "parks services description",
            pins: [
                { x : 45.577849, y : 9.156383 },
                { x : 45.677849, y : 9.256383 },
                { x : 45.477849, y : 9.456383 }
            ],
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Job Services",
            description: "job services description",
            pins: [
                { x : 45.577849, y : 9.156383 },
                { x : 45.677849, y : 9.256383 },
                { x : 45.477849, y : 9.456383 }
            ],
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]
    await models.POI.bulkCreate(poiList),
    await models.SERVICE.bulkCreate(serviceList)
}