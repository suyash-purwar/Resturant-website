const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');  // Setting view engine

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log('Website is upon port 3000');
});
