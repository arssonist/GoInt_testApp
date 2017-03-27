module.export = {


  var Shopify = new shopifyAPI({
  shop: 'MYSHOP', // MYSHOP.myshopify.com
  shopify_api_key: '', // Your API key
  access_token: '' // Your API password


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

    Shopify.get('/admin/products.json', function(err, data, headers){
    console.log(data);
    console.log(headers);
    res.send(data)
  });


}
