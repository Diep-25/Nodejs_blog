const express = require('express');
const morgan = require('morgan');
const { engine } =  require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db')

db.connect();
//install folder public images
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
// Template
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//middewere
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

// routing

route(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});