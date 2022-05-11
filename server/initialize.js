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
    await models.POI.bulkCreate(poiList)
}