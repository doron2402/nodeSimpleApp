console.log('Starting...');

var connect = require('connect'),
	app = connect(),
	connectRoute = require('connect-route'),
	port = 8080;


app.use(connect.logger('dev'))
	.use(connect.static('public'));


  app.use(connectRoute(function (router) {
 	
  	router.get('/', function (req, res, next){
  		res.end('Hi Amir...');
  	});

    router.post('/home', function (req, res, next) {
        res.end('POST to home');
    });


    router.get('/about', function(req, res, next){
    	res.end('About...');
    })
}));

app.listen(port);

console.log('server is running listenning on: ' + port);



console.log(app);

