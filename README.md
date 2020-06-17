# Search for Country to Visit
The app allows its users to search for countries and add them to their backetlist

## Working Prototype
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it



### Wireframes
Landing/Login Page
:-------------------------:
![Landing/Login Page](/github-images/wireframes/login-form.jpg)

Landing/Registration
:-------------------------:
![Landing/Registration Page](/github-images/wireframes/register-form.jpg)

Visited Countries View
:-------------------------:
![Visited Countries View](/github-images/wireframes/visited-countries-view.jpg)

Bucket list View
:-------------------------:
![Bucket list View](/github-images/wireframes/bucket-list-view.jpg)

## Screenshots
Landing/Login Page
:-------------------------:
![Landing Page](/github-images/screenshots/login-page-screenshot.png)


## Functionality
The app's functionality includes:
* Every User has the ability to create an account

## React Components Structure
* __Index.js__ (stateless)
    * __App.js__ (stateless)
        * __LandingPage.js__ (stateless)
        * __Navigation.js__ (stateless)
            * __DrawerToggleButton.js__ (stateless)
        * __Backdrop.js__ (stateless) 
        * __SideDrawer.js__ (stateless)
            * __RegistartionPage.js__ (stateless)
            * __LoginPage.js__ (stateless) 
        * __BucketListPage.js__ (stateless) 
        * __VisitedPage.js__ (stateless) 

## Business Objects (back-end structure)
* User (database table)
    * Username (email validation)
    * Password (at least 8 chars, at least one alpha and a special character validation)


## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## API Documentation
API Documentation details:
* get all users

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* add more functionality

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test