export default async (models) => {

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                              HOME PAGE DETAILS
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const homePageList = [
        {
            name: "Welcome to Amsterdam",
            description: "",
            img: "https://s8.gifyu.com/images/homepage-dam.jpg",
            section: "carousel",
        },
        {
            name: "CaruselImg1",
            description: "",
            img: "https://s8.gifyu.com/images/GettyImages-659083249-5912430d3df78c92830e4eaa.jpg",
            section: "carousel",
        },
        {
            name: "CaruselImg2",
            description: "",
            img: "https://s8.gifyu.com/images/gaurav-jain-2K2SR19RLg8-unsplash.jpg",
            section: "carousel",
        },
        {
            name: "CaruselImg3",
            description: "",
            img: "https://s8.gifyu.com/images/tobias-kordt-2GaBftOdewQ-unsplash.jpg",
            section: "carousel",
        },
        {
            name: "Attractions",
            description: "",
            img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg",
            section: "categories",
        },
        {
            name: "Itineraries",
            description: "",
            img: "https://s8.gifyu.com/images/moritz-kindler-I5zb8Tw-Avc-unsplash.jpg",
            section: "categories",
        },
        {
            name: "Events",
            description: "",
            img: "https://s8.gifyu.com/images/pedro-cunha-GjUXroFNC0c-unsplash.jpg",
            section: "categories",
        },
        {
            name: "Services",
            description: "",
            img: "https://s8.gifyu.com/images/behzad-ghaffarian-ayrkUIy9r30-unsplash.jpg",
            section: "categories",
        },
    ]


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                          POINTS OF INTEREST
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const poiList = [
        {
            name: "Rijksmuseum",
            shortDescription: "The Rijksmuseum is the national museum of the Netherlands",
            description: "The Rijksmuseum is the national museum of the Netherlands dedicated to Dutch arts and history and is located in Amsterdam. The museum is located at the Museum Square in the borough of Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. The Rijksmuseum was founded in The Hague on 19 November 1798 and moved to Amsterdam in 1808, where it was first located in the Royal Palace and later in the Trippenhuis. The current main building was designed by Pierre Cuypers and first opened in 1885. On 13 April 2013, after a ten-year renovation which cost € 375 million, the main building was reopened by Queen Beatrix. In 2013 and 2014, it was the most visited museum in the Netherlands with record numbers of 2.2 million and 2.47 million visitors. It is also the largest art museum in the country. The museum has on display 8,000 objects of art and history, from their total collection of 1 million objects from the years 1200/2000, among which are some masterpieces by Rembrandt, Frans Hals, and Johannes Vermeer. The museum also has a small Asian collection, which is on display in the Asian pavilion.",
            img: "https://s8.gifyu.com/images/Rijksmuseum.jpg",
            info: "",
            timetable: "",
            category: ""
        },
        {
            name: "Van Gogh museum",
            shortDescription: "The Van Gogh Museum specialises in works by Vincent van Gogh",
            description: "The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South, close to the Stedelijk Museum, the Rijksmuseum, and the Concertgebouw. The museum opened on 2 June 1973, and its buildings were designed by Gerrit Rietveld and Kisho Kurokawa. The museum contains the largest collection of Van Gogh's paintings and drawings in the world. In 2017, the museum had 2.3 million visitors and was the most-visited museum in the Netherlands, and the 23rd-most-visited art museum in the world. In 2019, the Van Gogh Museum launched the Meet Vincent Van Gogh Experience, a technology-driven immersive exhibition on Van Gogh's life and works, which has toured globally.",
            img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg",
            info: "",
            timetable: "",
            category: ""
        },
        {
            name: "Dam square",
            shortDescription: "Its notable buildings and frequent events make it one of the best-known and most important locations in the city and the country.",
            description: "In the heart of Amsterdam, Dam Square was created in the 15th century and every day since it has been the center-point of the city. Within the square, you will be able to see the picturesque Royal Palace.To this day, the Royal Palace is where the Dutch royal family hosts prominent visitors from around the world. The good news, however, is that the palace is open for locals and tourists. Other important attractions include the National Monument, which honors lives lost in combat, Madame Tussauds and the Nieuwe Kerk Church, which hosts art exhibitions throughout the year.",
            img: "https://s8.gifyu.com/images/amsterdam_09_piazza_dam_jpg_1200_630_cover_85.jpg",
            info: "",
            timetable: "",
            category: ""
        },
        {
            name: "Anne Frank house",
            shortDescription: "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank.",
            description: "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands. During World War II, Anne Frank hid from Nazi persecution with her family and four other people in hidden rooms, in the rear building, of the 17th-century canal house, later known as the Secret Annex. She did not survive the war but her wartime diary was published in 1947. Ten years later the Anne Frank Foundation was established to protect the property from developers who wanted to demolish the block. The museum opened on 3 May 1960. It preserves the hiding place, has a permanent exhibition on the life and times of Anne Frank, and has an exhibition space about all forms of persecution and discrimination. In 2013 and 2014, the museum had 1.2 million visitors and was the 3rd most visited museum in the Netherlands, after the Rijksmuseum and Van Gogh Museum.",
            img: "https://s8.gifyu.com/images/AF-house-1.jpg",
            info: "",
            timetable: "",
            category: ""
        },
        {
            name: "Vondelpark",
            shortDescription: "The Vondelpark is a public urban park of 47 hectares in Amsterdam, Netherlands. It is part of the borough of Amsterdam-Zuid and situated west from the Leidseplein and the Museumplein.",
            descriprion: "The Vondelpark is a public urban park of 47 hectares in Amsterdam, Netherlands. It is part of the borough of Amsterdam-Zuid and situated west from the Leidseplein and the Museumplein. The park was opened in 1865 and originally named Nieuwe Park, but later renamed Vondelpark, after the 17th-century playwright and poet Joost van den Vondel. The park has around 10 million visitors annually. Within the park is an open-air theatre, a playground and several food service facilities.",
            img: "https://s8.gifyu.com/images/28280-Vondelpark.jpg",
            info: "",
            timetable: "",
            category: ""
        },
        {
            name: "Royal Palace of Amsterdam",
            shortDescription: "In the middle of the capital stands the Royal Palace Amsterdam, King Willem-Alexander's official reception palace.",
            description: "The Royal Palace of Amsterdam in Amsterdam is one of three palaces in the Netherlands which are at the disposal of the monarch by Act of Parliament. It is situated on the west side of Dam Square in the centre of Amsterdam, opposite the War Memorial and next to the Nieuwe Kerk. The palace was built as a city hall during the Dutch Golden Age in the 17th century. The building became the royal palace of King Louis Napoleon and later of the Dutch Royal House.",
            img: "https://s8.gifyu.com/images/28280-Vondelpark.jpg",
            info: "",
            timetable: "",
            category: ""
        },
    ]


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                                  ITINERARIES
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const itinerariesList = [
        {
            name: "One-day itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Three-day itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Five-day itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "One-week itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        }

    ]

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                                      EVENTS
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const eventList = [
        {
            name: "ice-skating-on-the-river",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "winter",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "van-gogh-week",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "winter",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "street-museum",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "spring",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "flower-walk",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "spring",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "summer-festival",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "summer",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "modern-art-exihibit",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "summer",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "fall-rock-festival",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "fall",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "museum-marathon",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            season: "fall",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },


    ]


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                              SERVICES
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    const serviceTypesList = [
        {
            name: "Medical_Services",
            description: "medical services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Cultural_Services",
            description: "cultural services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Thematic_and_leisure_parks",
            description: "parks services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            name: "Job_Services",
            description: "job services description",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]
    const serviceList = [
        {
            type: "Medical_Services",
            name: "Big Hospital",
            description: "is the biggest hospital of Amsterdam!",
            address: "First Street, 1",
            hours: "Open 24/7",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Medical_Services",
            name: "Small Hospital",
            description: "is the smallest hospital of Amsterdam!",
            address: "Second Street, 2",
            hours: "Open 24/7",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Cultural_Services",
            name: "Big Library",
            description: "is the biggest library of Amsterdam!",
            address: "Bookworm Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Cultural_Services",
            name: "Small Library",
            description: "is the smallest library of Amsterdam!",
            address: "Little Street, 2",
            hours: "09:00 - 15:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic_and_leisure_parks",
            name: "Big Park",
            description: "is the biggest park of Amsterdam!",
            address: "Leaf Street, 1",
            hours: "08:00 - 20:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic_and_leisure_parks",
            name: "Small Park",
            description: "is the smallest park of Amsterdam!",
            address: "Bertolds Street, 2",
            hours: "08:00 - 12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Job_Services",
            name: "Big Job Center",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Job_Services",
            name: "Small Job Center",
            description: "is the smallest job center of Amsterdam!",
            address: "Unemployed Street, 2",
            hours: "Currently closed",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]


    await models.POI.bulkCreate(poiList),
        await models.ServiceType.bulkCreate(serviceTypesList),
        await models.Service.bulkCreate(serviceList),
        await models.HomePageDetail.bulkCreate(homePageList),
        await models.Itinerary.bulkCreate(itinerariesList),
        await models.Event.bulkCreate(eventList)
}
