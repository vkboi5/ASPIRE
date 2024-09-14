const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
  startupName: { type: String, required: true },
  fundingStatus: { type: String, required: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  sector: { type: String, required: true },
  services: { type: String, required: true },
  udyogAadhaar: { type: String, required: true },
  natureOfEntity: { type: String, required: true },
  interest: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Startup', StartupSchema);