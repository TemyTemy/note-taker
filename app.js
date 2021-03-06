const express = require('express');
const path = require('path');
const notes = require('./notes');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

/*
* Route to render HTML Page
*/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));
app.get('/api/notes', (req, res) => res.json(notes.listNotes()));
app.post('/api/notes', function(req, res) {
    console.log('Saving......');
    const title = req.body.title;
    const text = req.body.text;
    notes.addNote(title, text);
  });
app.delete('/api/notes/:id', (req, res) =>{
  const id = req.params.id;
  notes.removeNote(id);
});  
app.listen(port, () => console.log(`App listening on port ${port}!`));