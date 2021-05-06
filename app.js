const express = require('express')
const path = require('path')
const restaurants = require('./notes')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

/*
* Route to render HTML Page
*/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));
// app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public', 'reserve.html')));
// app.get('/api/tables', (req, res) => res.json(restaurants.getTables()));

// app.post('/api/tables/reserve', (req, res) => {
//     console.log(req.body);
//     res.json(restaurants.reserveTable(req.body));
// });


app.listen(port, () => console.log(`App listening on port ${port}!`))