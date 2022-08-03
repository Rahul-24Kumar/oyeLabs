const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({

    name: {
        type: String
    },

    email_Id: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true        
    },

    phone_Number: {
        type: String
    }
});

module.exports = mongoose.model('customer', customerSchema);

 