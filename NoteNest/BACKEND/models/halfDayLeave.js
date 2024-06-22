const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    Reasonn: String,
    Date: Date,
   
    Communicationmethodd: String,
    communicationTypee: String,
 
});

module.exports = mongoose.model('HalfdayLeave', leaveSchema);
