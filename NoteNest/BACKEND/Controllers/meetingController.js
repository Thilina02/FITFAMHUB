// controllers/meetingController.js
const Meeting = require('../models/Meeting');

exports.addMeeting = async (req, res) => {
  try {
    const { description, date, time, venue, link, preparationRequirements } = req.body;
    const newMeeting = new Meeting({ description, date, time, venue, link, preparationRequirements });
    await newMeeting.save();
    res.status(201).json({ message: 'Meeting added successfully' });
  } catch (error) {
    console.error('Error adding meeting:', error);
    res.status(500).json({ error: 'Error adding meeting' });
  }
};

// Controller to get all meetings
exports.getAllMeetings = async (req, res) => {
    try {
      const meetings = await Meeting.find();
      res.json(meetings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getMeetingById = async (req, res) => {
    try {
      const { id } = req.params; // Extract the meeting ID from request parameters
      const meeting = await Meeting.findById(id); // Find the meeting by its ID in the database
      if (!meeting) {
        // If the meeting is not found, return a 404 response
        return res.status(404).json({ message: 'Meeting not found' });
      }
      // If the meeting is found, return it in the response
      res.json(meeting);
    } catch (error) {
      // If any error occurs during the process, log the error and return a 500 response
      console.error('Error getting meeting by ID:', error);
      res.status(500).json({ error: 'Error getting meeting by ID' });
    }
  };



  

exports.DeleteById = async(req, res) => {
  try{
    const {id} = req.params;
    //use mongoose to delete by id
    const deleteMeeting = await Meeting.findByIdAndDelete(id);
    if(!deleteMeeting){
      return res.status(404).json({message: 'Meeting is not found'});
    }
    res.sendStatus(204);
  }catch(error){
    console.error(error);
    return res.status(500).json({error: 'Internal server error'});
  }
}


exports.updateMeetingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, date, time, venue, link, preparationRequirements } = req.body; // Get the updated data from the request body

   
    // Update the meeting
    const updateMeeting = await Meeting.findByIdAndUpdate(
      id,
      {
        description,
        date,
        time,
        venue,
        link,
        preparationRequirements,
      },
      { new: true } // Return the updated document
    );

    // Check if the meeting exists
    if (!updateMeeting) {
      return res.status(404).json({ message: 'Meeting not found for update' });
    }

    // Send the updated meeting data as response
    res.json(updateMeeting);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
