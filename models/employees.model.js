const mongoose = require('mongoose');

//Schema definition
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        unique:true,
        required: true
    },
    bloodGroup: {
        type: String
    }
});

//Model creation
module.exports = mongoose.model('employees', employeeSchema);