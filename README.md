# **Hypermedia Applications Project 2021-2022**

Implementation of a Web site for the TOURIST office of a cultural tourism destination.
<br>
Visit-DAM is an online visitor guide for the city of Amsterdam. 

### **Group name:** Milan-Delft

### **Group members contribution:**

- Marco Ferrero 
- Daniele Ferracuti 
- Davide Franchi  
- Emile Lampe 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
# Project Structure

### `/components:` 
The components directory contains Vue.js components. Components make up the different parts of pages and can be reused and imported into pages, layouts and even other components.

More information about the usage of this directory in [the NuxtJs documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `/docs:` 
This folder contains all the design and evaulation documents that are present in the report to deliver. 

### `/layouts:`
Layouts are important to set default or custom layouts that can be shared with different pages, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the NuxtJs documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `/mixins:`
This directory contains methods in common with all pages and components files. We use these functions to format data retrieved from DB. 

### `/pages:`
This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the NuxtJs documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `/server:`
This directory contains all the server middlewares files for backend implementation, such as connection and initialization(filling of contents) of postgres DB and definitions of rest API.

### `/static:`
This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/dam-logo.png` is mapped as `/dam-logo.png`.

More information about the usage of this directory in [the NuxtJs documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `/assets:`
The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the NuxtJs documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `/nuxt.config.js file:` 
The nuxt.config.js is the main configuration file for NuxtJs projects: in our project we have defined base address, header contents for html pages such as description, title and links to external css (bootstrap and material icons), server middlewares path and other configuration definitions.

# NuxtJs use
The best practices of the NuxtJs framework we have used are:
- SSR: Server-side rendering, is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. Server-side sends a fully rendered page to the client; the client's JavaScript bundle takes over which then allows the Vue.js app to hydrate.

- ServerMiddleware: Nuxt internally creates a connect instance that you can add your own custom middleware to. This allows us to register additional routes (typically /api routes) without need for an external server. The use of serverMiddlewares is important in our project to connect to the postgres DB and to create REST API for get/post requests. 

- Global css: Defining in the nuxt.config.js file the css property, in every html template of .vue files we are able to use the global.css file as a style sheet. 

- Axios module: Axios is a promise-based HTTP client that works in the browser and Node. js environment or, in simpler terms, it is a tool for making requests (e.g API calls) in client-side applications and Node.


# Development Choices

## Bootstrap: 
This project uses Bootstrap 5.2 that is a free and open-source CSS framework. 
<br>
Main Bootstrap css file is imported and declared in the nuxt.config.js file.
<br>
In particular some components are based on bootstrap html and css such as Accordion, Carousel, Card, Header.
Bootstrap grid system is also used to create row-columns layouts with fixed breakpoints that are important to make pages responsive (when mobile or particular devices are used).

## Google Maps: 
The use of maps in the project is based on the implementation of the component Map.vue, that is included in pages that needs a single (or more) placemark map.

Map.vue contains an iframe which renders the Google map using the src parameter,
consisting of: 
```
API_KEY (key provided by Google to access Maps services) +
QUERY (a text string that allows to perform a search on the maps service)
```
Whenever the Map.vue component is included in a page, the inserted query allows to render one or more points on the map (based on the result of the Maps service):
[find out more](https://developers.google.com/maps/documentation/embed/get-started).

On the itineraries/_id page, in order to display a map for the itinerary topic with
several pins connected, we heve used the `Google - My Maps` service,
creating a static map for each itinerary and saving the src on the db:
[find out more](https://www.google.com/maps/about/mymaps/)

## Images Store: 

To save images online we have used the Gifyu service:

Gifyu.com is a free photo-sharing website and image hosting service which allows users to upload and share images online.


# Design Report

> You can find the file of the final **Design Document**  in the [deliverable]() folder.

# Usability Report

> You can find the file of the final **Usability Document**  in the [deliverable]() folder.