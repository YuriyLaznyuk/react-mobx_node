const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve('dist')));
app.set('view engine', 'ejs');
//change folder
app.set('views', `${__dirname}/views-ejs`);
// app.set('views', path.resolve('server','views-ejs'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/index', (req, res) => {
  res.render('index.ejs', { title: 'MobX React' });
});

app.use((req,res)=>{
  res.status(404)
    .render('error.ejs',{error:' PAGE ERROR 404'})
});

module.exports = app;