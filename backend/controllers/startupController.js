const Startup = require('../models/Startup');

exports.registerStartup = async (req, res) => {
  const {
    startupName,
    fundingStatus,
    description,
    industry,
    sector,
    services,
    udyogAadhaar,
    natureOfEntity,
    interest,
  } = req.body;

  try {
    const startup = new Startup({
      startupName,
      fundingStatus,
      description,
      industry,
      sector,
      services,
      udyogAadhaar,
      natureOfEntity,
      interest,
    });

    await startup.save();
    res.json({ msg: 'Startup registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getStartupByName = async (req, res) => {
  const { startupName } = req.params;

  try {
    const startup = await Startup.findOne({ startupName });
    if (!startup) {
      return res.status(404).json({ msg: 'Startup not found' });
    }
    res.json(startup);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};