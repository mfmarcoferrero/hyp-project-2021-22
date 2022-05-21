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
    const serviceTypesList = [
        {
            name: "Medical Services",
            description: "medical services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Cultural Services",
            description: "cultural services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Thematic and leisure parks",
            description: "parks services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Job Services",
            description: "job services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]
    const serviceList = [
        {
            type: "Medical Services",
            name: "Big Hospital",
            description: "is the biggest hospital of Amsterdam!",
            address: "First Street, 1",
            hours: "Open 24/7",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Medical Services",
            name: "Small Hospital",
            description: "is the smallest hospital of Amsterdam!",
            address: "Second Street, 2",
            hours: "Open 24/7",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Cultural Services",
            name: "Big Library",
            description: "is the biggest library of Amsterdam!",
            address: "Bookworm Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Cultural Services",
            name: "Small Library",
            description: "is the smallest library of Amsterdam!",
            address: "Little Street, 2",
            hours: "09:00 - 15:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic and leisure parks",
            name: "Big Park",
            description: "is the biggest park of Amsterdam!",
            address: "Leaf Street, 1",
            hours: "08:00 - 20:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic and leisure parks",
            name: "Small Park",
            description: "is the smallest park of Amsterdam!",
            address: "Bertolds Street, 2",
            hours: "08:00 - 12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Job Services",
            name: "Big Job Center",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Job Services",
            name: "Small Job Center",
            description: "is the smallest job center of Amsterdam!",
            address: "Unemployed Street, 2",
            hours: "Currently closed",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]
    await models.POI.bulkCreate(poiList),
    await models.SERVICETYPES.bulkCreate(serviceTypesList),
    await models.SERVICE.bulkCreate(serviceList)
}