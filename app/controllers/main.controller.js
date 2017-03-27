
module.exports = {
  showHomePage: function(req,res){
    res.render('pages/home.ejs', { title: 'Go Integrations Store'})
  }
}
