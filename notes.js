const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const Note = require('./lib/Note');
const DB_FILE = 'db.json';
let DB_JSON = [];

const notes = {
    listNotes: function() {
        loadDb();
        return DB_JSON;
    },

    addNote: function(title, text) {
        DB_JSON.push(note);
    }

}

function loadDb() {
    const dbFile = path.join(__dirname, + DB_FILE);
    const dbText = fs.readFileSync(dbFile).toString();
    DB_JSON = JSON.parse(dbText);
}

function addNote(title, text) {
    const uid = uniqid();
    const note  = new Note(title, text, uid);
    DB_JSON.push(note);
    return uid;
}