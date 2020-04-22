// require('dotenv').config();
const path = require('path');
const express = require('express');

// Initiaize Instance of Express as app
const app = express();

// POST Requests: In order to accept post requests, you must use bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| !IMPORTANT :: Should not be done in Production, only for local dev
| Bypassing CORS so express can be on port 5000 and react can be on 3000
| In production you would have Express access a static build of your app.
---------------------------*/
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

/*---------------------------
| Route Collections
---------------------------*/
const routes = require('./express-routes/index.js');
app.use('/api/icons', routes.icons);
app.use('/api/praducts', routes.praducts);
app.use('/api/slides', routes.slides);
//app.use('/api/flag', routes.flag);
app.use('/api/email', routes.email);
//app.use('/api/login', routes.login);

// Catchall for requests that do not match our routing
app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.sendFile(path.join(__dirname, 'public'));
});
                                                                            
// This is linda example for postman (http://localhost:5000/hello)
//app.get('/hello', (req, res) => res.send('Hello!'));
                                                                            
// Heroku hook to use dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('App is listening on port ' + PORT);