# Idea..

Creating an e-commerce platform for the future!
Mars Marketplace is a platform that allows users to view and add items to an e-commerce site intended for those living on another planet.

* As a user, I want to be able to create an account and login with my credentials.

* As a user, I want to be able to create a new product listing.

* As a user, I want to be able to view all available products.

* As a user, I want to be able to view singular products by id.

*As a user, I want to be able to delete a posting, if an item becomes unavailable.


# Initial Work Distribution
Everyone will be making equal contributions to portions of both front end and back end.


# Features/User Acceptance Criteria

**APIS** 
GET/POST/PUT/DELETE Routes
Filter by.....

**DATABASE** 
Seeds -> itemData, galleryData
            ->Title, Description, Price, Date Posted, Location

**NPM Package** 
CSS Framework Simple Vanilla JS 
SASS

NPM package for uploading images (Cloudinary for image hosting)
S3 bucket from AWS (more challenging but good tool)
Multer (store photos in db/multipart form data)
EJS (substitute for handlebars)
PUG (indentation / tags are gone)

**MVC Structure**
config
    -connection.js
controllers
    -API
    -Routes
    -index.js
db
    -schema.sql
models
    -index.js
    -items.js (belongs to user)
    -user.js (user hasmanyitems)
seeds
    -itemData
    -galleryData
    -seeds.js
    -Json files
Utils
    -helpers.js
views
    -homepage.handlebars
    -login.handlebars
    -profile.handlebars
    -details.handlebars
layouts
    -main.handlebars
server.js
.env
gitignore

# Database Diagram

[Photo of routes](assets/23.PNG)
[Start of DB](assets/24.PNG)