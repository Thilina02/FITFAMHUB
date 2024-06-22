const Leaves = require('../models/Leaves');
const HalfdayLeave = require('../models/halfDayLeave')
const FulldayLeave = require('../models/fullDayLeaves')

exports.addSickLeave = async (req, res) => {
    try {
      const { Reason, Duration, additionalDetails, Communicationmethod, communicationType } = req.body;
      const newLeave = new Leaves({ Reason, Duration, additionalDetails, Communicationmethod, communicationType });
      await newLeave.save();
      res.status(201).json({ message: 'Leave added successfully' });
    } catch (error) {
      console.error('Error adding Leave:', error);
      res.status(500).json({ error: 'Error adding Leave' });
    }
  };
  exports.addHlafdayLeave = async (req, res) => {
    try {
      const { Reasonn, Date, Communicationmethodd, communicationTypee } = req.body;
      const newHalfLeave = new HalfdayLeave({ Reasonn, Date, Communicationmethodd, communicationTypee });
      await newHalfLeave.save();
      res.status(201).json({ message: 'Leave added successfully' });
    } catch (error) {
      console.error('Error adding Leave:', error);
      res.status(500).json({ error: 'Error adding Leave' });
    }
  };

  exports.addFulldayLeave = async (req, res) => {
    try {
      const { Reasonnn, Date, Communicationmethoddd, communicationTypeee } = req.body;
      const newFullLeave = new FulldayLeave({ Reasonnn, Date, Communicationmethoddd, communicationTypeee });
      await newFullLeave.save();
      res.status(201).json({ message: 'Leave added successfully' });
    } catch (error) {
      console.error('Error adding Leave:', error);
      res.status(500).json({ error: 'Error adding Leave' });
    }
  };

  exports.getAllSickLeaves = async (req, res) => {
    try {
      const SickLeaves = await Leaves.find();
      res.json(SickLeaves);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };