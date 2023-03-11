const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: [10, 'Description must have more than 10 characters'],
        maxlength: [50, 'Description must have less than 50 characters']
    },
    assignee: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: [true, 'Due date is required']
    },
    employeeID: {
        type: String
    }
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;