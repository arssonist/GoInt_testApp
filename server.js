////////////ENV VARIABLES//////////
// load env variables
require('dotenv').config();

//////DEPENDENCIES/////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts/'),
    port = process.env.PORT || 8080,
    request = require('request'),
    shopifyAPI = require('shopify-node-api')
    // mongoose = require('mongoose')

    // if we have json, we will parse it
// app.use(bodyParser.json())

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

// data coming from website form
// app.use(bodyParser.urlencoded({extended:false}));

///////SHOPIFY//////////////
  var Shopify = new shopifyAPI({
    shop: 'gointegrations-devtest', // MYSHOP.myshopify.com
    shopify_api_key: process.env.API_KEY,
    shopify_shared_secret: process.env.API_SECRET,
    access_token: process.env.PASSWORD
  });

  var auth_url = Shopify.buildAuthURL();

  app.use(function(req,res,next){

    Shopify.get('/admin/products.json', function(err, data, headers){

  });
  // console.log("request");
  res.send(req.headers1);
  // res.send(req.mehtod, req.url)
  next()
});
//
// app.use('/', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// })
//






//////////////SERVE STATIC//////////////
app.use(express.static(__dirname + '/public'))

/////////VIEW ENGINE//////////
app.set('view engine', 'ejs')
app.use(expressLayouts)

/////////DB CONNNECT/ /////////
// DB_URI is added to the process
// mongoose.connect(process.env.DB_URI)

///////////////LOCALS- include by name//////////////////////
app.locals.appTitle = "Test Go Integrations Shop"


/////////////ROUTES/////////////////
app.use(require('./app/routes'));

//////////////////PORT///////////////////////
app.listen(port);
console.log(`App running on post ${port}`)
