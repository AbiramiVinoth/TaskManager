const express = require('express');
const app = express();
const hbs = require("hbs");
const path = require("path");

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get('/users/add', function (req, res) {
  res.render('addUser');
})

app.get('/users', function (req, res) {
  res.render('users');
})

app.get('/tasks/add', function (req, res) {
  res.render('addTask');
})

app.get('/tasks', function (req, res) {
  res.render('tasks');
})

app.get('/reg', function (req, res) {
  res.render('reg')
})

app.get('/', function (req, res) {
  res.render('login')
})

app.listen(3000, function () {
  console.log("The server is up on port 3000");
})