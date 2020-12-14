
const catalog = require('./catalog/catalog.js');
const praducts = require('./praducts/praducts.js');
const email = require('./email/email.js');
const slides = require('./slides/slides.js');
// const login = require('./login/login.js');

const routes = {
  catalog: catalog,
  praducts: praducts,
  email: email,
  slides: slides,
  // login: login,

}

module.exports = routes;