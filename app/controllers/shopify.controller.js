  var Shopify = new shopifyAPI({
    shop: 'MYSHOP', // MYSHOP.myshopify.com
    shopify_api_key: '', // Your API key
    access_token: '' // Your API password


  });
  var auth_url = Shopify.buildAuthURL();

module.export = {
    
    Shopify.get('/admin/products.json', function(err, data, headers){
    console.log(data);
    console.log(headers);
    res.send(data)
  });


}
