const mongoose = require('mongoose');

const leavesSchema = new mongoose.Schema({
    Reason: String,
    Duration: String,
    additionalDetails: String,
    Communicationmethod: String,
    communicationType: String,
 
});

module.exports = mongoose.model('Leaves', leavesSchema);
