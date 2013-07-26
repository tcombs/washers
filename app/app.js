
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// mongo db setup
var mongoose = require('mongoose');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')(
    { 
        src: __dirname + '/public',
        debug: true,
        paths: [path.join(__dirname, 'public', 'stylesheets')]
    }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//routing
var api = require('./controllers/api.js');
app.get('/new', api.new);
app.get('/', api.index);
app.get('/add/:team/:ammount',api.add);
app.get('/sub/:team/:ammount',api.sub);
app.get('/clear',api.clear);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//after app initializes connect to db
var databaseSettings = require('./private/dbconnection.js');
mongoose.connect(databaseSettings.dbconstring);


//set up websockets
var io = require('socket.io');
io.listen(80);
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});