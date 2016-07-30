var express = require('express');
var Path = require('path');
var routes = express.Router();
var app = express();

var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));


routes.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'angular'])
});

routes.post('/shreds', function(req, res) {
  res.send(['data'])
})
// endpoint 
routes.get('/weather', function(req, res){
  API.getWeather(data)
  .then(function(resp){
    res.send(resp)
  })
  .catch(function(err){
    console.error(err)
  })
})

if(process.env.NODE_ENV !== 'test') {

  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })





  app.use( require('body-parser').json() );


  app.use('/', routes);

  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);
} else {
  module.exports = routes;
}
