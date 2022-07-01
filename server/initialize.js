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
            description: "The Vondelpark is a public urban park of 47 hectares in Amsterdam, Netherlands. It is part of the borough of Amsterdam-Zuid and situated west from the Leidseplein and the Museumplein. The park was opened in 1865 and originally named Nieuwe Park, but later renamed Vondelpark, after the 17th-century playwright and poet Joost van den Vondel. The park has around 10 million visitors annually. Within the park is an open-air theatre, a playground and several food service facilities.",
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
            name: "Jewish Historical Museum",
            shortDescription: "The Jewish Historical Museum is the only museum in the Netherlands to focus on Jewish history, religion and culture",
            description: "The Jewish Historical Museum is the only museum in the Netherlands to focus on Jewish history, religion and culture. The museum is located in a group of four historical Ashkenazi synagogues at the heart of the former Jewish quarter in the centre of Amsterdam. It features the following themes: the role of religion and tradition, the links with Israel, the persecution of Jews during the Second World War, personal life stories and the mutual influence of Jewish and Dutch culture.",
            img: "https://s8.gifyu.com/images/jewish-2.jpg",
            info: "",
            timetable: "",
            category: "museum",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "National Maritime Museum",
            shortDescription: "The National Maritime Museum holds one of the world's largest and most notable maritime collections including paintings, ship models, navigation instruments and sea charts. ",
            description: "The National Maritime Museum shows how water connects worlds. Housed in the old ‘Zeemagazijn van de Admiraliteit’ of Amsterdam, a former naval storehouse from 1656, the museum is dedicated to ships and ship transport. It illustrates the story of five hundred years of maritime history in the Netherlands and shows the sea’s influence on the Dutch culture. The collection includes ship models, paintings, world maps and various weapons. A 1990 replica of the famous VOC ship Amsterdam is moored next to the museum.",
            img: "https://s8.gifyu.com/images/amsterdam-museum-maritime-ship-and-building.jpg",
            info: "",
            timetable: "",
            category: "museum",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Stedelijk Museum Amsterdam",
            shortDescription: "The Stedelijk Museum Amsterdam, colloquially known as the Stedelijk, is a museum for modern art, contemporary art, and design.",
            description: "The Stedelijk Museum Amsterdam, colloquially known as the Stedelijk, is a museum for modern art, contemporary art, and design.The 19th century building was designed by Adriaan Willem Weissman and the 21st century wing with the current entrance was designed by Benthem Crouwel Architects. It is located at the Museum Square in the borough Amsterdam South, where it is close to the Van Gogh Museum, the Rijksmuseum, and the Concertgebouw.\n" +
              "\n" +
              "The collection comprises modern and contemporary art and design from the early 20th century up to the 21st century. It features artists such as Vincent van Gogh, Wassily Kandinsky, Ernst Ludwig Kirchner, Marc Chagall, Henri Matisse, Jackson Pollock, Karel Appel, Andy Warhol, Willem de Kooning, Marlene Dumas, Lucio Fontana, and Gilbert & George.",
            img: "https://s8.gifyu.com/images/Stedelijk-Museum-Amsterdam.jpg",
            info: "",
            timetable: "",
            category: "museum",
            link: "https://www.stedelijk.nl/en/visit",
            itineraryName: [ "Three-day itinerary", ]
        },
        {
            name: "West Church (Westerkerk)",
            shortDescription: "The Western Church, is the most important Protestant church in the city, while its bell tower remains until today the pride of Amsterdam, regarded by many, as the city symbol.",
            description: "The Western Church, is the most important Protestant church in the city, while its bell tower remains until today the pride of Amsterdam, regarded by many, as the city symbol. Probably for the reason that their land is so flat, the Dutch love towers. The much admired 85m/275ft high Westerkerk Tower, built in 1638, dominates above most of the Old City centre. During the tourist season, you may also climb the Westerkerk Tower and enjoy a truly unique view of Amsterdam from its balcony.",
            img: "https://s8.gifyu.com/images/westkerk.jpg",
            info: "",
            timetable: "",
            category: "building",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "The Oude Church",
            shortDescription: "The Oude Church is a big and monumental church (The Old Church) that dominates over the Red Light District.",
            description: "The Oude Church is a big and monumental church (The Old Church) that dominates over the Red Light District. Standing in the church's main entry, you will be amazed to see a coffee shop just left to it, windows with sex workers in front of it and the Princess Juliana Nursery School right of it. Contrast could not be bigger and there. The Oude Kerk is the oldest and for centuries was the most important church in Amsterdam. Although it lost this title to the Nieuwe Kerk (New Curch), it still remains one of the grand sights to visit.",
            img: "https://s8.gifyu.com/images/oude-church.jpg",
            info: "",
            timetable: "",
            category: "building",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "Heineken Experience",
            shortDescription: "In 1988 Heineken closed an old Amsterdam brewery, which spread its smell over the popular De Pijp district, and opened a tour for the fans of its beer.",
            description: "In 1988 Heineken closed an old Amsterdam brewery, which spread its smell over the popular De Pijp district, and opened a tour for the fans of its beer. For a small admission charge, you could learn something about the famous pilsner and drink as much as you wanted.\n" +
              "\n" +
              "The museum part of the show still remains interesting. The architecture of the 19th century Heineken brewery buildings, authentic interiors, old photographs and state decorations Heineken family received, famous gold medal from The Universal Exhibition in Paris in 1889, which you may see reproduced on each can of Heineken, impressive brass beer tanks and a quiet horse stable.",
            img: "https://s8.gifyu.com/images/heineken-experience.jpg",
            info: "",
            timetable: "",
            category: "experience",
            link: "https://www.stedelijk.nl/en/visit",
            itineraryName: [ "Five-day itinerary", ]
        },

        {
            name: "Hortus Botanicus Amsterdam",
            shortDescription: "Amsterdam has one of the oldest botanical gardens in the world called Hortus Botanicus. It was established in 1638 by the city municipality as Hortus Medicus, an herb garden with medical plants for Amsterdam doctors and pharmacists. ",
            description: "Amsterdam has one of the oldest botanical gardens in the world called Hortus Botanicus. It was established in 1638 by the city municipality as Hortus Medicus, an herb garden with medical plants for Amsterdam doctors and pharmacists. The reasons for establishing a specialized medical garden were very serious: at that time the cities of Leiden and Utrecht experienced the plague epidemic (1634-1637) with thousands of victims. Additionally, several monasteries moved out of the quickly growing city and there was not enough space in Amsterdam to plant herbs.",
            img: "https://s8.gifyu.com/images/horus-botanicus-2.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Three-day itinerary", ]
        },
        {
            name: "Amsterdam Royal Zoo",
            shortDescription: " The zoo features 27 historic buildings, of which most date from the 19th century.",
            description: " The zoo features 27 historic buildings, of which most date from the 19th century. Because of this, Artis has a distinctive charm and a historical dimension that lacks in more modern zoos. The monumental aquarium contains tropical fish and in the monumental birdhouse various birds fly around freely. In the tropical forest many animal species live with and between each other. Artis also features a butterfly pavilion where butterflies flutter.",
            img: "https://s8.gifyu.com/images/artis.jpg",
            info: "",
            timetable: "",
            category: "experience",
            link: "https://www.artis.nl/en/",
            itineraryName: [ "One-week itinerary", ]
        },
        {
            name: "Albert Cuyp Market",
            shortDescription: "The Albert Cuypmarkt is a busy cosmopolitan food and clothes market, and by far the most famous daily market in Amsterdam. ",
            description: "The Albert Cuypmarkt is a busy cosmopolitan food and clothes market, and by far the most famous daily market in Amsterdam. The whole area including the Ferdinand Bolstraat and Ceintuurbaan has many interesting shops. The 100-year-old, open-air street market features nearly 300 vendors selling everything from fruits, vegetables, fish, meats, spices, chocolate, cheese, flowers and plants to cheap clothes, jewelry, shoes, bike accessories, bedding, fabrics and cosmetics.",
            img: "https://s8.gifyu.com/images/albertcuyp.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Five-day itinerary" ]
        },
        {
            name: "Bloemenmarkt",
            shortDescription: "The Amsterdam Flower Market is the only floating flower market in the world, and one of the most fragrant places of interest of Amsterdam - in all seasons.",
            description: "The Amsterdam Flower Market is the only floating flower market in the world, and one of the most fragrant places of interest of Amsterdam - in all seasons. This unique market exists since 1862. The flower stalls stand on the houseboats and evoke the old days when the market was daily supplied by boat.\n" +
              "\n" +
              "The flower market of Amsterdam is a particularly colorful place in the city. You will find there all sorts of tulips, narcissus, geraniums and many other types of flowers. At the Amsterdam Flower Market you can either buy bouquets, single flowers or bulbs. The bulbs are ready for export, so you can enjoy them at home too.",
            img: "https://s8.gifyu.com/images/bloemenmarkt-2.jpg",
            info: "",
            timetable: "",
            category: "experience",
            itineraryName: [ "Five-day itinerary", ]
        },
        {
            name: "FOAM",
            shortDescription: "Foam is an internationally renowned Amsterdam museum that exhibits all genres of photography in a beautiful canal-side setting.",
            description: "Foam is an internationally renowned Amsterdam museum that exhibits all genres of photography in a beautiful canal-side setting. As well as displaying a wide variety of works, it acts as a creative hub where photographers can meet and participate in forums and symposiums.",
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
            description: "Amsterdam is easily one of the most famous cities in Europe. If you’re planning on spending 1 day in Amsterdam, we think you should visit this attractions.\nFor your trip of 1 day we advise you three of the most characteristic attraction: ",
            img: "https://s8.gifyu.com/images/best-and-popular-Amsterdam-tours.jpg",
            maplink: "https://www.google.com/maps/d/u/0/embed?mid=1v9W7nOXFe2K0ALFhUTf8XAxhFIeErOQ&ehbc=2E312F"
        },
        {
            name: "Three-day itinerary",
            description: "Amsterdam is easily one of the most famous cities in Europe. If you’re planning on spending 3 days in Amsterdam, we think you should visit this attractions.\nFor your trip of 3 days we advise you five of the most characteristic attraction: ",
            img: "https://s8.gifyu.com/images/083da412e487316e61.jpg",
            maplink: "https://www.google.com/maps/d/u/0/embed?mid=16bHMJ-NUrChVKw6rmpcpADWHjeBR9OI&ehbc=2E312F"
        },
        {
            name: "Five-day itinerary",
            description: "Amsterdam is easily one of the most famous cities in Europe. If you’re planning on spending 5 days in Amsterdam, we think you should visit this attractions.\nFor your trip of 5 days we advise you seven of the most characteristic attraction: ",
            img: "https://s8.gifyu.com/images/caption.jpg",
            maplink: "https://www.google.com/maps/d/u/0/embed?mid=17prt9f6ckhm0AkSGVunlfzZ4OA5Mwis&ehbc=2E312F"
        },
        {
            name: "One-week itinerary",
            description: "Amsterdam is easily one of the most famous cities in Europe. If you’re planning on spending one week in Amsterdam, we think you should visit this attractions.\nFor your trip of one week we advise you ten of the most characteristic attraction: ",
            img: "https://s8.gifyu.com/images/tulip-field-netherlands-shutterstock_483619153-1024x679.jpg",
            maplink: "https://www.google.com/maps/d/u/0/embed?mid=1yIdV0JHJTtZr3o2ddYjhCzSC-IlnWVs&ehbc=2E312F"
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
            date: '2022-12-21',
            type: 'sport'
        },
        {
            name: "Vondelpark Open Air Theatre",
            description:"Head to the Open Air Theatre in Amsterdam's Vondelpark to catch summertime performances from children's acts, classical presentations or the latest Dutch or international pop performer. From May until early September you'll find a lot going on every Saturday and Sunday. ",
            season: "winter",
            img: "https://s8.gifyu.com/images/IMG_6594.jpg",
            location: "Vondelpark",
            when: "From May to September",
            date: '2022-05-01',
            type: 'art'
        },
        {
            name: "Amsterdam Light Festival",
            description:"During the winter months, the annual Amsterdam Light Festival (ALF) illuminates the city with brilliant works of light art. Each year, hundreds of ideas are submitted by designers, architects and artists from around the world. A selection committee usually chooses about 30 artworks that make up the festival’s installations. Past years have featured the work of prominent artists such as Ai Weiwei and Nicole Banowetz. ",
            season: "winter",
            img: "https://s8.gifyu.com/images/65790_fullimage_adam-light-festival_light-a-wish_1120x-520x320.jpg",
            location: "Canals of Amsterdam",
            when: "December 2 - January 23",
            date: '2022-12-02',
            type: 'art'
        },
        {
            name: "New Year's Eve in Amsterdam",
            description:"Whether you’re a party animal or a romantic, young of years or young-at-heart, a big spender or on a budget, Amsterdam is a great city to ring in the New Year. Fireworks illuminate the night sky and the city thrums in a cacophony of rockets, aerials, brocades, bangers and glittering willows. There will not be an official city-sponsored firework display this year, but you can expect to see a host of firework shows lighting up various locations around Amsterdam. Street level can be a bit chaotic in the midst of all the revelry, so you may want to find a nice rooftop perch or balcony to take it all in. ",
            season: "winter",
            img: "https://s8.gifyu.com/images/amsterdam-january-blog.jpg",
            location: "Dam square",
            when: "December 31 - January 1",
            date: '2022-12-31',
            type: 'experience'
        },
        {
            name: "Sinterklaas",
            description:"Saint Nicholas has had close ties with Amsterdam since 343 AD. Legend has it that Sinterklaas originally came from Turkey as St. Nicolaus, the Bishop of Mira, an honourable man who was kind to children. No one really knows why he then chose to live in Spain but historians point to the Spanish domination over the Netherlands in the past. The medieval attire of Sinterklaas’ assistants, the Zwarte Pieten, is equally mysterious. Zwarte Piet (literally: ‘Black Peter’) has long been the subject of debate in Amsterdam and the rest of the Netherlands. In 2018, the traditional Zwarte Pieten were replaced by Schoorsteenpieten (literally: ‘Chimney Peters’) at the Amsterdam Sinterklaas Parade. Rather than wearing the traditional blackface makeup that is at the heart of the Zwarte Piet controversy, the Schoorsteenpieten are only marked with light smudges of soot from bringing presents down the chimney. The more important characteristics of the Pieten, such as their jovial attitudes and seemingly endless supply of cookies and sweets, remain unchanged.  ",
            season: "winter",
            img: "https://s8.gifyu.com/images/sinterklaas-1280x720.jpg",
            location: "Dam square",
            when: "December 25",
            date: '2022-12-25',
            type: 'experience'
        },
        {
            name: "Amsterdam Fringe Festival",
            description:"Sometimes referred to as the NL Theater Festival’s quirky sister, Amsterdam Fringe Festival is all about bringing avant-garde productions to light. Each year some 70 productions are presented created by unorthodox theatre-makers keen to impress with their vision. What’s more, the venues where these eclectic performances take place can be just as unexpected. ",
            season: "summer",
            img: "https://s8.gifyu.com/images/Fringe-Festival-e1528194443195-1.webp",
            location: "Vondelpark",
            when: "September 1 - September 11",
            date: '2022-09-01',
            type: 'art'
        },
        {
            name: "IDFA Festival",
            description:"Each November, the International Documentary Film Festival Amsterdam (IDFA) transforms Amsterdam’s city centre into a paradise for documentary film fans. Held since 1988, IDFA is the world’s largest documentary festival and features lectures, workshops and over 300 movies that tell stories about life around the world. Some are funny, others sad, and they all represent the best the genre has to offer. Screenings take place throughout the city and include outdoor showings where you can watch a film under the night sky. ",
            season: "autumn",
            img: "https://s8.gifyu.com/images/1479458168545_0570x0400_0x0x0x0_1574326207583.jpg",
            location: "EYE Film Institute Netherlands",
            when: "November 13 - November 19",
            date: '2022-09-01',
            type: 'art'
        },
        {
            name: "TCS Amsterdam Marathon",
            description:"The 46th edition of the TCS Amsterdam Marathon will return to the city on Sunday October 16th, 2022. When it comes to running events, you could say Amsterdam has a personal best: the TCS Amsterdam Marathon taking place annually in October. The event draws elite runners from around the world as well as thousands of amateurs.",
            season: "autumn",
            img: "https://s8.gifyu.com/images/tcs-amsterdam-marathon-2020-lg.jpg",
            location: "Vondelpark",
            when: "October 16",
            date: '2022-10-16',
            type: 'sport'
        },
        {
            name: "Pride Amsterdam",
            description:"One of the biggest celebrations of LGBTI equality in the world, Pride Amsterdam celebrates its 25th anniversary in 2021. Whilst most large-scale parties, including the Canal Parade and Milkshake Festival cannot take place this year, a wealth of smaller events, exhibitions, talks and screenings will take place across the city.",
            season: "summer",
            img: "https://s8.gifyu.com/images/tcs-amsterdam-marathon-2020-lg.jpg",
            location: "Dam square",
            when: "June",
            date: '2022-06-01',
            type: 'experience'
        },
        {
            name: "Grachtenfestival Amsterdam",
            description:"The magnificent Grachtenfestival (Canal Festival), held annually in August on and around Amsterdam’s canals, is one of the cultural highlights of the Amsterdam summer. The historic canal belt of Amsterdam, a UNESCO World Heritage site since 2010, hosts the ten-day festival of classical music at numerous beautiful locations. ",
            season: "summer",
            img: "https://s8.gifyu.com/images/ia_grachtenfestival_02-1024x576.jpg",
            location: "Canals of Amsterdam",
            when: "August 8 - August 14",
            date: '2022-08-12',
            type: 'art'
        },
        {
            name: "De Parade Theatre Festival",
            description:"At De Parade there really is something for everyone. Whether you’re a die-hard theatre devotee or just along for the ride, you’ll find it here no matter what your pleasure is. Once on the festival terrain, you’ll find yourself enticed by artists giving outdoor performances in full regalia. The festival offers visitors a variety of short and full-length performances, as well as performances in open-air and secret locations. There’s always something new and surprising to look out for!",
            season: "summer",
            img: "https://s8.gifyu.com/images/63967_fullimage_parade_amsterdam_818x512.jpg",
            location: "Vondelpark",
            when: "August 12 - August 14",
            date: '2022-08-12',
            type: 'art'
        },
        {
            name: "Holland Festival",
            description:"One of the highlights of Amsterdam’s theatre and dance agenda, this theatre festival is held in various locations in Amsterdam and offers a heady mix of theatre, music, opera, film and visual arts, as well as Western and non-Western performance pieces in a variety of languages. programming consistently emphasises disciplinary crossovers and always includes works of the highest artistic standards. The festival has particularly been a frontrunner in supporting modern and non-classical contemporary music and new forms in musical theatre.",
            season: "spring",
            img: "https://s8.gifyu.com/images/dc93db771eb490fc0954e069674a6fe0.jpg",
            location: "Dam square",
            when: "March 15 - March 21",
            date: '2022-03-15',
            type: ''
        },
        {
            name: "van-gogh-week",
            description: "If you're lucky to visit in this period, then you can't miss the Van Gogh Week! This event takes place in Van Gogh Museum, and consist in special prices to admire the painter master works, interesting activities and plays, and much more!",
            season: "winter",
            img: "https://cdn.getyourguide.com/img/tour/57a213594ce6f.jpeg/145.jpg",
            location: "Van Gogh Museum",
            when: "January 7 - January 14",
            date: '2023-01-07',
            type: 'art'
        },
        {
            name: "street-museum",
            description: "The cold snow is melting, and which occasion would be better than this to make a sroll in the city's streets! Modern and street artist are collaborating to make a open-sky museum on the streets of amsterdam, bringing their works or live performances. You can't miss it!",
            season: "spring",
            img: "https://travel.thewom.it/pictures/2020/04/06/street-art_1.jpeg",
            location: "Canals of Amsterdam",
            when: "April 18 - March 18",
            date: '2023/04/18',
            type: 'art'

        },
        {
            name: "flower-walk",
            description:"What's that parfume on the air? It's blooming tulips! If you love flowers then this is the right time to visit our Botanic Center. Tulip flowers are a wonderful sight and a charateristic event of our city. Come visit alone or with good company!",
            season: "spring",
            img: "https://i0.wp.com/tulipfestivalamsterdam.com/wp-content/uploads/2018/11/cropped-Bloemenvelden-Bollenstreek-2019.jpg?resize=800%2C451&ssl=1",
            location: "Hortus Botanicus Amsterdam",
            when: "23 March until firsts of April",
            date: '2023-03-23',
            type: 'experience'

        },
        {
            name: "summer-festival",
            description: "Do you like to dance? Yes? Then what are you waitig for? Amsterdam Summer Festival is one of the craziest and most charateristic summer festivals of europe, with artists coming from all around the globe. All popular genres are going to be played. Raggaeton, Pop music, Indie and much more!",
            season: "summer",
            img: "https://storage.googleapis.com/mcp_acc_236blog/uploads/2015/06/2011-4-Dennis-Bouman.jpg",
            location: "Vondelpark",
            when: "July 5 - July 7",
            date: '2022-08-05',
            type: 'music'
        },
        {
            name: "modern-art-exihibit",
            description: "Modern art is very cool right? I think it is. Even if you don't like it, give this exihibit a chance! There are a lot of very famous artists that are presenting their new artwork. Also, the entrance is free!",
            season: "summer",
            img: "https://files.ocula.com/anzax/77/77b2e762-fbf0-4c1b-91d2-3e2ee0380d10_2000_1500.jpg",
            location: "FOAM",
            when: "August 15 - August 30",
            date: '2022-08-15',
            type: 'art'

        },
        {
            name: "fall-rock-festival",
            description:"Ready to rock your body? Fall Rock Festival is the perfect event for rock-loving people. A lot of very famous bands and rock artists are coming to play, and thousands of people are expected to join. Let's welcome the new season with dancing and rocking!",
            season: "fall",
            img: "https://media.resources.festicket.com/image/1262x460/smart/filters:quality(70)/www/magazine/Rock_B.jpg",
            location: "Dam square",
            when: "October 15 - October 18",
            date: '2022-10-15',
            type: 'music'

        },
        {
            name: "street-food-experience",
            description: "If you love street food, then you're going to adore Street Food Experience! In this chilly week of November a contest of all street food chefs is taking place in Amsterdam and... of course we need people to eat this food! So, if you're lucky to be there in this period, pay this event a visit!",
            season: "fall",
            img: "https://s1.gifyu.com/images/duomo.jpg",
            location: "Bloemenmarkt",
            when: "November 10 - November 17",
            date: '2022-11-05',
            type: 'food'

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
