const mongoose = require('mongoose');

const FullleaveSchema = new mongoose.Schema({
    Reasonnn: String,
    Date: Date,
   
    Communicationmethoddd: String,
    communicationTypeee: String,
 
});

module.exports = mongoose.model('fulldayleave', FullleaveSchema);
