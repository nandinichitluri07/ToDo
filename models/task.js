const mongoose = require('mongoose');
// creating Schema for Tasks
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    }
});
const todolist = mongoose.model('todolist', taskSchema);
module.exports = todolist;