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

///////SHOPIFY//////////////
  var Shopify = new shopifyAPI({
    shop: 'gointegrations-devtest', // MYSHOP.myshopify.com
    shopify_api_key: process.env.API_KEY,
    shopify_shared_secret: process.env.API_SECRET,
    access_token: process.env.PASSWORD
  });

  var auth_url = Shopify.buildAuthURL();


  // app.get('/shopify_login', function(req,res){
  //   res.redirect(auth_url)
  // })
  // app.get('/finish_auth', function(req, res){
  //
  //   var Shopify = new shopifyAPI(config), // You need to pass in your config here
  //     query_params = req.query;
  //   });
app.use(req,res,next){

    Shopify.get('/admin/products.json', function(err, data, headers){
    console.log(data);
  console.log(headers);
  });
}

  // request(auth_url, function(error, response, body) {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body)
  //   })

  // res.redirect(auth_url);

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

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
