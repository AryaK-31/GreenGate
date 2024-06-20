const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    message : {
        type: String,
        minlength: [10, 'Message Field must be less than 20 characters long']
    }
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;