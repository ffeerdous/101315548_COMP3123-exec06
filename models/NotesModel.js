const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: Number,
    dateAdded: Date,
    dateUpdated: Date

})

module.exports = mongoose.model("notes", noteSchema)


//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated