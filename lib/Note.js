class Note {

    constructor(title, text, id) {
        this.title = title;
        this.text = text;
        this.id = id;
    }

    getId() {
        return this.id;
    }
    
    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }
}
module.exports = Note;