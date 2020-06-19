const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    nameInForm:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    options:{
        type: String,
    }

})

module.exports = dataModel = mongoose.model('dataModel',dataSchema)