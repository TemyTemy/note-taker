const express = require('express');
const path = require('path');
const notes = require('./notes');
const axios = require('axios')
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

/*
* Route to render HTML Page
*/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));
app.get('/api/notes', (req, res) => res.json(notes.listNotes));
app.post('/api/notes', function(req, res) {
    const title = req.body.title;
    const text = req.body.text;
    notes.addNote(title, text);
  });
app.listen(port, () => console.log(`App listening on port ${port}!`))