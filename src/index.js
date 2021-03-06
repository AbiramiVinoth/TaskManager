require('./db/mongoose');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path");
const bodyParser = require('body-parser');
const routes = require('./routes');

const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');


app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
// app.engine('hbs', hbs({helpers: require("../public/js/helper.js").helpers,extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/reg', function (req, res) {
  res.render('reg')
})

app.get('/', function (req, res) {
  res.render('login')
})

routes.apiRoutes(app)

app.listen(3000, function () {
  console.log("The server is up on port 3000");
})