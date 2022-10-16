const noteModel = require('../models/NotesModel');
const express = require("express");
const routes = express.Router()


/*
{
    "noteTitle": "JavaScript Class exercise 06",
    "noteDescription": "This is a note",
    "priority": 1,
    "dateAdded": "09-08-2012",
    "dateUpdated": "10-12-2022"
}
*/

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const newNote = new noteModel(req.body)
    newNote.save()
    res.status(200).send(newNote)
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const allnotes = noteModel.find()
    res.status(200).send(allnotes)
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    const noteID = noteModel.findById(req.params.noteId, req.body)
    res.status(200).send(noteID)
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    const updatedNote = noteModel.findByIdAndUpdate(req.params.noteId, req.body)
    noteID.save()
    res.status(200).send(updatedNote)
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    const deletedNote = noteModel.findByIdAndDelete(req.params.noteId, req.body)
    res.status(200).send(deletedNote)
});

module.exports = routes;
