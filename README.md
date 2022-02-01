# JF TEST API

## About

CRUD database for:

1. User
2. Product

## Built With

[![Express.js  v4.17.1](https://img.shields.io/badge/Express%20-v4.17.1-brightgreen.svg?style=flat)](https://expressjs.com/)
[![Node.js v14.17.3](https://img.shields.io/badge/Node%20-v14.17.3-blue.svg?style=flat)](https://nodejs.org/en/)
[![Sequelize 6.12.0-beta.2](https://img.shields.io/badge/Node%20-v14.17.3-blue.svg?style=flat)](https://sequelize.org/master/)

## Requirements

1. [NodeJs](https://nodejs.org/en/)
2. Node_modules
3. [Postman](https://www.getpostman.com/)
4. PostgreSQL

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type npm install
3. Make new file a called .env, set up first
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name #nama_database
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/)
8. You can see all the end point [here](https://documenter.getpostman.com/view/13532274/UVR5q8Xm)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT = 5000
DATABASE_URL = 'postgresql://yourdbuser:yourdbpassword@localhost:5432/yourdbname'

APP_SECRET_KEY = secret!
APP_URL = http://localhost:5000
APP_UPLOAD_ROUTE = /upload
APP_UPLOAD_PATH =public/images

```

## Postman Publish

For more documentation , check it out below!

<a  href="https://documenter.getpostman.com/view/13532274/UVR5q8Xm">

<img  src="https://img.shields.io/badge/Documentation-POSTMAN-blue.svg?style=popout&logo=postman"/>

</a>

## License

© [Muhammad Abdi Priyangga](https://github.com/abdipriyangga)
