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
        const id = addNote(title, text);
        saveDb();
        return id;
    },

    getNote: function(id) {
        return findNote(id);
    },

    removeNote: function(id) {
        deleteNote(id);
    }

}

function loadDb() {
    const dbFile = path.join(__dirname, + DB_FILE);
    const dbText = fs.readFileSync(dbFile).toString();
    DB_JSON = JSON.parse(dbText);
}

function saveDb() {
    const dbFile = path.join(__dirname, + DB_FILE);
    fs.writeFile(dbFile, JSON.stringify(DB_JSON), error => {
        if (error) {
            console.error(error);
            return;
        }
    });
}

function addNote(title, text) {
    const uid = uniqid();
    const note  = new Note(title, text, uid);
    DB_JSON.push(note);
    return uid;
}

function findNote(id) {
    const note = DB_JSON.find((x) => x.id === id);
    return note ? note : {};
}

function deleteNote(id) {
    const index = DB_JSON.findIndex((x) => x.id === id);
    DB_JSON.splice(index, 1);
    saveDb();
}

module.exports = notes;

