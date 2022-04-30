export default async (models) => {
    const poiList = [
        {
            name: "Duomo di Milano",
            latitude: 45.464211,
            longitude: 9.191383,
            description: "Details about Duomo ",
            img: "https://www.pexels.com/photo/grayscale-photography-of-cathedral-3325372/",
        },
        {
            name: "Garibaldi",
            latitude: 45.482500,
            longitude: 9.191020,
            description: "Details about Garibaldi",
            img: "https://www.pexels.com/photo/people-sitting-on-green-grass-field-near-the-buildings-10619277/",
        },
        {
            name: "CityLife",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about CityLife",
            img: "https://www.pexels.com/photo/people-sitting-on-green-grass-field-near-the-buildings-10619277/",
        },
        {
            name: "Cat 4",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about CityLife",
            img: "https://www.pexels.com/photo/people-sitting-on-green-grass-field-near-the-buildings-10619277/",
        },
        {
            name: "Cat 5",
            latitude: 45.477849,
            longitude: 9.156383,
            description: "Details about CityLife",
            img: "https://www.pexels.com/photo/people-sitting-on-green-grass-field-near-the-buildings-10619277/",
        },
    ]
    await models.POI.bulkCreate(poiList)
}