export default async (models) => {

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                              HOME PAGE DETAILS
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const homePageList = [
        {
            name: "",
            description: "",
            img: "https://s8.gifyu.com/images/homepage-dam.jpg",
            section: "carousel",
        },
        {
            name: "",
            description: "",
            img: "https://s8.gifyu.com/images/GettyImages-659083249-5912430d3df78c92830e4eaa.jpg",
            section: "carousel",
        },
        {
            name: "",
            description: "",
            img: "https://s8.gifyu.com/images/gaurav-jain-2K2SR19RLg8-unsplash.jpg",
            section: "carousel",
        },
        {
            name: "",
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

    const photoList = [
        {
            name: "name1",
            description: "description",
            url: "https://images.pexels.com/photos/11991865/pexels-photo-11991865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name2",
            description: "description",
            url: "https://images.pexels.com/photos/12447940/pexels-photo-12447940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name3",
            description: "description",
            url: "https://images.pexels.com/photos/12019099/pexels-photo-12019099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name4",
            description: "description",
            url: "https://images.pexels.com/photos/12217674/pexels-photo-12217674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name5",
            description: "description",
            url: "https://images.pexels.com/photos/12361807/pexels-photo-12361807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name6",
            description: "description",
            url: "https://images.pexels.com/photos/12317958/pexels-photo-12317958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name7",
            description: "description",
            url: "https://images.pexels.com/photos/12250627/pexels-photo-12250627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name8",
            description: "description",
            url: "https://images.pexels.com/photos/12199828/pexels-photo-12199828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
        {
            name: "name9",
            description: "description",
            url: "https://images.pexels.com/photos/12094234/pexels-photo-12094234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            path: "attractions",
        },
    ]


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                              POINTS OF INTEREST
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const poiList = [
        {
            name: "Dam square",
            shortDescription: "Its notable buildings and frequent events make it one of the best-known and most important locations in the city and the country.",
            description: "In the heart of Amsterdam, Dam Square was created in the 15th century and every day since it has been the center-point of the city. Within the square, you will be able to see the picturesque Royal Palace.To this day, the Royal Palace is where the Dutch royal family hosts prominent visitors from around the world. The good news, however, is that the palace is open for locals and tourists. Other important attractions include the National Monument, which honors lives lost in combat, Madame Tussauds and the Nieuwe Kerk Church, which hosts art exhibitions throughout the year.",
            img: "https://s8.gifyu.com/images/amsterdam_09_piazza_dam_jpg_1200_630_cover_85.jpg",
            info: "",
            timetable: "",
            category: "top",
            itineraryName: [ "One-day itinerary", "One-week itinerary" ]
        },
        {
            name: "Anne Frank house",
            shortDescription: "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank.",
            description: "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands. During World War II, Anne Frank hid from Nazi persecution with her family and four other people in hidden rooms, in the rear building, of the 17th-century canal house, later known as the Secret Annex. She did not survive the war but her wartime diary was published in 1947. Ten years later the Anne Frank Foundation was established to protect the property from developers who wanted to demolish the block. The museum opened on 3 May 1960. It preserves the hiding place, has a permanent exhibition on the life and times of Anne Frank, and has an exhibition space about all forms of persecution and discrimination. In 2013 and 2014, the museum had 1.2 million visitors and was the 3rd most visited museum in the Netherlands, after the Rijksmuseum and Van Gogh Museum.",
            img: "https://s8.gifyu.com/images/AF-house-1.jpg",
            info: "",
            timetable: "",
            category: "top",
            link: "https://www.annefrank.org/en/museum/tickets",
            itineraryName: ["Three-day itinerary", "One-week itinerary"]
        },
        {
            name: "Vondelpark",
            shortDescription: "The Vondelpark is a public urban park of 47 hectares in Amsterdam, Netherlands. It is part of the borough of Amsterdam-Zuid and situated west from the Leidseplein and the Museumplein.",
            descriprion: "The Vondelpark is a public urban park of 47 hectares in Amsterdam, Netherlands. It is part of the borough of Amsterdam-Zuid and situated west from the Leidseplein and the Museumplein. The park was opened in 1865 and originally named Nieuwe Park, but later renamed Vondelpark, after the 17th-century playwright and poet Joost van den Vondel. The park has around 10 million visitors annually. Within the park is an open-air theatre, a playground and several food service facilities.",
            img: "https://s8.gifyu.com/images/28280-Vondelpark.jpg",
            info: "",
            timetable: "",
            category: "top",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Royal Palace of Amsterdam",
            shortDescription: "In the middle of the capital stands the Royal Palace Amsterdam, King Willem-Alexander's official reception palace.",
            description: "The Royal Palace of Amsterdam in Amsterdam is one of three palaces in the Netherlands which are at the disposal of the monarch by Act of Parliament. It is situated on the west side of Dam Square in the centre of Amsterdam, opposite the War Memorial and next to the Nieuwe Kerk. The palace was built as a city hall during the Dutch Golden Age in the 17th century. The building became the royal palace of King Louis Napoleon and later of the Dutch Royal House.",
            img: "https://s8.gifyu.com/images/royal-palace.jpg",
            info: "",
            timetable: "",
            category: "top",
            link: "https://www.paleisamsterdam.nl/en/visit/",
            itineraryName: [ "One-day itinerary", ]
        },
        {
            name: "Canals of Amsterdam",
            shortDescription: "Since its development in the 17th century, Amsterdam’s Canal Ring has grown to be one of the world’s most unique urban landscapes.",
            description: "Amsterdam has more than 100 kilometers (62 mi) of grachten (canals), about 90 islands and 1,500 bridges. The three main canals (Herengracht, Prinsengracht and Keizersgracht), dug in the 17th century during the Dutch Golden Age, form concentric belts around the city, known as the Grachtengordel. Alongside the main canals are 1550 monumental buildings. The 17th-century canal ring area, including the Prinsengracht, Keizersgracht, Herengracht and Jordaan, were listed as UNESCO World Heritage Site in 2010, contributing to Amsterdam's fame as the Venice of the North",
            img: "https://s8.gifyu.com/images/canals.jpg",
            info: "",
            timetable: "",
            category: "top",
            itineraryName: [ "One-day itinerary", ]
        },
        {
            name: "Rijksmuseum",
            shortDescription: "Rijksmuseum Amsterdam. Rijksmuseum in Amsterdam is in the top 3 of most visited museums of the Netherlands and we totally understand why. With it's magnificent art from the Netherlands and lots of other countries, it's well worth visiting.",
            description: "The Rijksmuseum is the national museum of the Netherlands dedicated to Dutch arts and history and is located in Amsterdam. The museum is located at the Museum Square in the borough of Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. The Rijksmuseum was founded in The Hague on 19 November 1798 and moved to Amsterdam in 1808, where it was first located in the Royal Palace and later in the Trippenhuis. The current main building was designed by Pierre Cuypers and first opened in 1885. On 13 April 2013, after a ten-year renovation which cost € 375 million, the main building was reopened by Queen Beatrix. In 2013 and 2014, it was the most visited museum in the Netherlands with record numbers of 2.2 million and 2.47 million visitors. It is also the largest art museum in the country. The museum has on display 8,000 objects of art and history, from their total collection of 1 million objects from the years 1200/2000, among which are some masterpieces by Rembrandt, Frans Hals, and Johannes Vermeer. The museum also has a small Asian collection, which is on display in the Asian pavilion.",
            img: "https://s8.gifyu.com/images/Rijksmuseum.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.rijksmuseum.nl/en/tickets/articles",
            itineraryName: [ "Three-day itinerary", "One-week itinerary" ]
        },
        {
            name: "Van Gogh Museum",
            shortDescription: "The Van Gogh Museum specialises in works by Vincent Van Gogh. Museum housing the world's largest collection of Van Gogh paintings, alongside drawings & letters",
            description: "The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South, close to the Stedelijk Museum, the Rijksmuseum, and the Concertgebouw. The museum opened on 2 June 1973, and its buildings were designed by Gerrit Rietveld and Kisho Kurokawa. The museum contains the largest collection of Van Gogh's paintings and drawings in the world. In 2017, the museum had 2.3 million visitors and was the most-visited museum in the Netherlands, and the 23rd-most-visited art museum in the world. In 2019, the Van Gogh Museum launched the Meet Vincent Van Gogh Experience, a technology-driven immersive exhibition on Van Gogh's life and works, which has toured globally.",
            img: "https://s8.gifyu.com/images/frans-ruiter-jfPGunIH_9M-unsplash.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Rembrandt House Museum",
            shortDescription: "The Rembrandt House Museum is housed in the former house of the Dutch painter Rembrandt van Rijn. This famous painter lived and worked in this house for nearly twenty years.",
            description: "The Rembrandt House Museum (Dutch: Museum Het Rembrandthuis) is a historic house and art museum in Amsterdam in the Netherlands. Painter Rembrandt lived and worked in the house between 1639 and 1656. The 17th-century interior has been reconstructed. The collection contains Rembrandt's etchings and paintings of his contemporaries. The museum had 237,383 visitors in 2014. The house is located in the Jodenbreestraat in Amsterdam, where Rembrandt lived and painted for a number of years, not far from the present-day city hall. Rembrandt purchased the house in 1639 and lived there until he went bankrupt in 1656, when all his belongings went on auction. The auction list enabled the reconstructions of all his belongings which are also on display in the house. None of his possessions were in the house thereafter. ",
            img: "https://s8.gifyu.com/images/rembrandt-museum.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.tiqets.com/en/amsterdam-attractions-c75061/tickets-for-the-rembrandt-house-museum-p972886",
            itineraryName: ["One-week itinerary", "Five-day itinerary"],
        },
        {
            name: "NEMO Science Museum",
            shortDescription: "In the green building of the Italian architect Renzo Piano you find NEMO, the largest science museum in the Netherlands. From its roof top square you can admire an amazing view over Amsterdam. ",
            description: "NEMO Science Museum (from latin Nobody) is a science centre in Amsterdam, Netherlands. It is located in the Oosterdokseiland neighbourhood in the Amsterdam-Centrum borough, situated between the Oosterdokseiland and the Kattenburg. The museum has its origins in 1923, and is housed in a building designed by Renzo Piano since 1997. It contains five floors of hands-on science exhibitions and is the largest science center in the Netherlands. It attracts around 670,000 visitors annually, which makes it the eighth most visited museum in the Netherlands. ",
            img: "https://s8.gifyu.com/images/nemo-2.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.nemosciencemuseum.nl/en/visit/tickets-and-prices/",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "EYE Film Institute Netherlands",
            shortDescription: "Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam that preserves and presents both Dutch and foreign films screened in the Netherlands.",
            description: "Eye Filmmuseum is located in the Overhoeks neighborhood of Amsterdam in the Netherlands. Its predecessor was the Dutch Historical Film Archive, founded in 1946 by David van Staveren, Felix Halverstad, and directors of Filmtheater Kriterion Piet Meerburg and Paul Kijzer. Following the accession of the archives of the Filmtheater de Uitkijk, the archive was renamed the Netherlands Filmmuseum under the leadership of its first director, film collector Jan de Vaal. The Filmmuseum was located in Kriterion and Stedelijk Museum until 1975, when de Vaal succeeded in acquiring a discrete space for the Filmmuseum in the Vondelpark Pavilion. In 2009, Nederlands Filmmuseum merged with Holland Film, the Netherlands Institute for Film Education and the Filmbank and plans were announced for a new home on the north bank of Amsterdam's waterfront. The Filmmuseum was renamed the Eye Film Institute Netherlands and was officially opened on April 4, 2012 by Queen Beatrix.",
            img: "https://s8.gifyu.com/images/eye24c6e80d5809998f.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.eyefilm.nl/en/plan-your-visit",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "Jewis Historical Museum",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/jewish-2.jpg",
            info: "",
            timetable: "",
            category: "museum",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "National Maritime Museum",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/amsterdam-museum-maritime-ship-and-building.jpg",
            info: "",
            timetable: "",
            category: "museum",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Stedelijk Museum Amsterdam",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/Stedelijk-Museum-Amsterdam.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.stedelijk.nl/en/visit",
            itineraryName: [ "Three-day itinerary", ]
        },
        {
            name: "West Church (Westerkerk)",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/westkerk.jpg",
            info: "",
            timetable: "",
            category: "building",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "The Oude Church",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/oude-church.jpg",
            info: "",
            timetable: "",
            category: "building",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "Heineken Experience",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/heineken-experience.jpg",
            info: "",
            timetable: "",
            category: "experience",
            link: "https://www.stedelijk.nl/en/visit",
            itineraryName: [ "Five-day itinerary", ]
        },

        {
            name: "Hortus Botanicus Amsterdam",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/horus-botanicus-2.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Three-day itinerary", ]
        },
        {
            name: "Amsterdam Royal Zoo",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/artis.jpg",
            info: "",
            timetable: "",
            category: "experience",
            link: "https://www.artis.nl/en/",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Albert Cuyp Market",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/albertcuyp.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Five-day itinerary" ]
        },
        {
            name: "Bloemenmarkt",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/bloemenmarkt-2.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "FOAM",
            shortDescription: "",
            description: "",
            img: "https://s8.gifyu.com/images/FOAM.jpg",
            info: "",
            timetable: "",
            category: "experience",
            link: "https://tickets.foam.org/en/tickets",
            itineraryName: [ "Three-day itinerary" ]
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
            img: "https://s8.gifyu.com/images/best-and-popular-Amsterdam-tours.jpg",
        },
        {
            name: "Three-day itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s8.gifyu.com/images/083da412e487316e61.jpg",
        },
        {
            name: "Five-day itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s8.gifyu.com/images/caption.jpg",
        },
        {
            name: "One-week itinerary",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident",
            img: "https://s8.gifyu.com/images/tulip-field-netherlands-shutterstock_483619153-1024x679.jpg",
        },

    ]


    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //                                      EVENTS
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    const eventList = [
        {
            name: "ice-skating-on-the-river",
            description:"Skate on the frozen Amsterdam canals! This event happens during winter for obvious reasons, and it's a really interesting way to explore the city's canal system. Just be careful not to break the ice under your feet!",
            season: "winter",
            img: "https://deadline.com/wp-content/uploads/2018/03/ap_18061696756896.jpg?w=681&h=383&crop=1",
            location: "Vondelpark",
            when: "During all winter",
            date: "21/12/2022"
        },
        {
            name: "van-gogh-week",
            description: "If you're lucky to visit in this period, then you can't miss the Van Gogh Week! This event takes place in Van Gogh Museum, and consist in special prices to admire the painter master works, interesting activities and plays, and much more!",
            season: "winter",
            img: "https://cdn.getyourguide.com/img/tour/57a213594ce6f.jpeg/145.jpg",
            location: "Van Gogh Museum",
            when: "January 7 - January 14",
            date: "07/01/2023"
        },
        {
            name: "street-museum",
            description: "The cold snow is melting, and which occasion would be better than this to make a sroll in the city's streets! Modern and street artist are collaborating to make a open-sky museum on the streets of amsterdam, bringing their works or live performances. You can't miss it!",
            season: "spring",
            img: "https://travel.thewom.it/pictures/2020/04/06/street-art_1.jpeg",
            location: "Canals of Amsterdam",
            when: "April 18 - March 18",
            date: "18/04/2023"

        },
        {
            name: "flower-walk",
            description:"What's that parfume on the air? It's blooming tulips! If you love flowers then this is the right time to visit our Botanic Center. Tulip flowers are a wonderful sight and a charateristic event of our city. Come visit alone or with good company!",
            season: "spring",
            img: "https://i0.wp.com/tulipfestivalamsterdam.com/wp-content/uploads/2018/11/cropped-Bloemenvelden-Bollenstreek-2019.jpg?resize=800%2C451&ssl=1",
            location: "Hortus Botanicus Amsterdam",
            when: "23 March until firsts of April",
            date: "23/03/2023"

        },
        {
            name: "summer-festival",
            description: "Do you like to dance? Yes? Then what are you waitig for? Amsterdam Summer Festival is one of the craziest and most charateristic summer festivals of europe, with artists coming from all around the globe. All popular genres are going to be played. Raggaeton, Pop music, Indie and much more!",
            season: "summer",
            img: "https://storage.googleapis.com/mcp_acc_236blog/uploads/2015/06/2011-4-Dennis-Bouman.jpg",
            location: "Vondelpark",
            when: "July 5 - July 7",
            date: "5/08/2022"

        },
        {
            name: "modern-art-exihibit",
            description: "Modern art is very cool right? I think it is. Even if you don't like it, give this exihibit a chance! There are a lot of very famous artists that are presenting their new artwork. Also, the entrance is free!",
            season: "summer",
            img: "https://files.ocula.com/anzax/77/77b2e762-fbf0-4c1b-91d2-3e2ee0380d10_2000_1500.jpg",
            location: "FOAM",
            when: "August 15 - August 30",
            date: "15/08/2022"

        },
        {
            name: "fall-rock-festival",
            description:"Ready to rock your body? Fall Rock Festival is the perfect event for rock-loving people. A lot of very famous bands and rock artists are coming to play, and thousands of people are expected to join. Let's welcome the new season with dancing and rocking!",
            season: "fall",
            img: "https://media.resources.festicket.com/image/1262x460/smart/filters:quality(70)/www/magazine/Rock_B.jpg",
            location: "Dam square",
            when: "October 15 - October 18",
            date: "15/10/2022"

        },
        {
            name: "street-food-experience",
            description: "If you love street food, then you're going to adore Street Food Experience! In this chilly week of November a contest of all street food chefs is taking place in Amsterdam and... of course we need people to eat this food! So, if you're lucky to be there in this period, pay this event a visit!",
            season: "fall",
            img: "https://s1.gifyu.com/images/duomo.jpg",
            location: "Bloemenmarkt",
            when: "November 10 - November 17",
            date: "10/11/2022"

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
            description: "Hospital, pharmacies and clinics. All you need for your wellness and well-being during your stay in Amsterdam!",
            img: "https://www.medicalgroupitalia.it/wp-content/uploads/2021/11/clicca-e-scopri-il-nostro-team-traumatology-center-medical-group-italia.jpg",
        },
        {
            name: "Cultural_Services",
            description: "cultural services description",
            img: "https://www.eui.eu/Content-Types-Assets/Services/Library/Librarian-showing-books.xa04803ee.JPG?w=586&h=330&fit=crop",
        },
        {
            name: "Thematic_and_leisure_parks",
            description: "parks services description",
            img: "https://dutchreview.com/wp-content/uploads/walibi-holland-theme-park-netherlands-rollercoaster.jpeg",
        },
        {
            name: "Work_Services",
            description: "job services description",
            img: "https://media.istockphoto.com/photos/young-asian-engineer-woman-picture-id1147555040?k=20&m=1147555040&s=612x612&w=0&h=zTWGl6N-nLBPK1iNGqo3BuZY2UZMcpMWMHD2DRQKv0k=",
        },
        {
            name: "Student_Services",
            description: "job services description",
            img: "https://i0.wp.com/oecdedutoday.com/wp-content/uploads/2020/10/PISA-Volume-VI-blog.jpg?fit=1200%2C675&ssl=1",
        },
    ]
    const serviceList = [
        {
            type: "Medical_Services",
            name: "Tourist Medical Center",
            description: "is a medical facility for tourists.",
            address: "De Ruijterkade, 24a",
            hours: "Open 24/7",
            img: "https://www.valdisievehospital.it/wp-content/uploads/2021/01/valdisieve-hospital-slider_02-desktop-1440x720.jpg",
        },
        {
            type: "Medical_Services",
            name: "Amsterdam UMC",
            description: "is an university hospital.",
            address: "Meibergdreef, 9",
            hours: "Open 24/7",
            img: "https://www.policlinico.mi.it/assets/english/img/university.jpg",
        },
        {
            type: "Medical_Services",
            name: "Acibadem International M.C.",
            description: "is a medical center near the main area.",
            address: "Arlandaweg, 100",
            hours: "Open 24/7",
            img: "https://helse-nord.no/PublishingImages/Artikler_nyhetssaker/Kjersti%20operating%20theatre.jpg?RenditionID=11",
        },
        {
            type: "Medical_Services",
            name: "Amsterdam Central Pharmacy",
            description: "is one of the biggest pharmacies in Amsterdam",
            address: "De Ruijterkade, 24a",
            hours: "Mon-Fri open 24h, Sat-Sun 08:30-20:30",
            img: "https://i0.wp.com/mytravelboektje.com/wp-content/uploads/2016/10/AMSTERDAM_PHARMACY-15-600x332.jpg?resize=600%2C332g",
        },
        {
            type: "Medical_Services",
            name: "Central Hospital",
            description: "is the biggest hospital of Amsterdam",
            address: "First Street, 1",
            hours: "Open 24/7",
            img: "https://iadsb.tmgrup.com.tr/9ace4a/0/0/0/0/1000/563?u=https://idsb.tmgrup.com.tr/2019/02/13/1550082551040.jpg",
        },
        {
            type: "Cultural_Services",
            name: "OBA Oosterdok - Public Library",
            description: "is a public library.",
            address: "Oosterdoksade, 143",
            hours: "08:00 - 18:00",
            img: "https://www.univiu.org/images/aauniviu2017/GP/viulife/library-488690_640.jpg",
        },
        {
            type: "Cultural_Services",
            name: "Rijksmuseum Research Center",
            description: "is place for study and research.",
            address: "Museumstraat, 1",
            hours: "09:00 - 15:00",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rijksmuseum_Research_Library_%281%29.jpg/640px-Rijksmuseum_Research_Library_%281%29.jpg",
        },
        {
            type: "Cultural_Services",
            name: "OBA Roelof Hartplein",
            description: "is a public library.",
            address: "Roelof Hartplein, 430",
            hours: "08:00 - 18:00",
            img: "https://live.staticflickr.com/4092/4951482918_8590438379_b.jpg",
        },
        {
            type: "Cultural_Services",
            name: "Artis Library",
            description: "is the a library open 24h.",
            address: "Plantafe Middelaan, 45",
            hours: "Open 24/7",
            img: "https://www.uva.nl/binaries/_ht_1562681604595/pagebanner/content/gallery/locaties/a/artisbibliotheek-lowres.jpg",
        },
        {
            type: "Cultural_Services",
            name: "Smallerjks Library",
            description: "is the smallest library of Amsterdam!",
            address: "Bookworm Street, 1",
            hours: "08:00 - 18:00",
            img: "https://thesmalllibrary.co.uk/wp-content/uploads/2021/04/1-small_library_meg.jpg",
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
            type: "Thematic_and_leisure_parks",
            name: "Big Park2",
            description: "is the biggest park of Amsterdam!",
            address: "Leaf Street, 1",
            hours: "08:00 - 20:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic_and_leisure_parks",
            name: "Big Park3",
            description: "is the biggest park of Amsterdam!",
            address: "Leaf Street, 1",
            hours: "08:00 - 20:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Thematic_and_leisure_parks",
            name: "Big Park4",
            description: "is the biggest park of Amsterdam!",
            address: "Leaf Street, 1",
            hours: "08:00 - 20:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Work_Services",
            name: "Big Job Center",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Work_Services",
            name: "Small Job Center",
            description: "is the smallest job center of Amsterdam!",
            address: "Unemployed Street, 2",
            hours: "Currently closed",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Work_Services",
            name: "Big Job Center2",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Work_Services",
            name: "Big Job Center3",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Work_Services",
            name: "Big Job Center4",
            description: "is the biggest job center of Amsterdam!",
            address: "Wall Street, 1",
            hours: "08:00 - 18:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Student_Services",
            name: "Small School",
            description: "is the smallest school of Amsterdam!",
            address: "Saint's Street, 1",
            hours: "Mon-Fri 8:00-12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Student_Services",
            name: "Big School",
            description: "is the biggest school of Amsterdam!",
            address: "St.Margharet Square, 1",
            hours: "Mon-Fri 8:00-12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Student_Services",
            name: "Small School2",
            description: "is the smallest school of Amsterdam!",
            address: "Saint's Street, 1",
            hours: "Mon-Fri 8:00-12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Student_Services",
            name: "Small School3",
            description: "is the smallest school of Amsterdam!",
            address: "Saint's Street, 1",
            hours: "Mon-Fri 8:00-12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
        {
            type: "Student_Services",
            name: "Small School4",
            description: "is the smallest school of Amsterdam!",
            address: "Saint's Street, 1",
            hours: "Mon-Fri 8:00-12:00",
            img: "https://s1.gifyu.com/images/duomo.jpg",
        },
    ]

    await models.POI.bulkCreate(poiList)
    await models.ServiceType.bulkCreate(serviceTypesList)
    await models.Service.bulkCreate(serviceList)
    await models.HomePageDetail.bulkCreate(homePageList)
    await models.Itinerary.bulkCreate(itinerariesList)
    await models.Event.bulkCreate(eventList)
    await models.Photolist.bulkCreate(photoList)
}
