var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var models = require("./models/");

var app = express ();

// app.use(express.static('public')); 

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);
app.use('/update', router);
app.use('/create', router);

require=("./controllers/burgers_controller.js");

//Open Server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});