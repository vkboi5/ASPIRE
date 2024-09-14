const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const startupController = require('../controllers/startupController');

// Existing POST route for registration
router.post(
  '/',
  [
    check('startupName', 'Startup name is required').not().isEmpty(),
    check('fundingStatus', 'Funding status is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('industry', 'Industry is required').not().isEmpty(),
    check('sector', 'Sector is required').not().isEmpty(),
    check('services', 'Services are required').not().isEmpty(),
    check('udyogAadhaar', 'UDYOG AADHAAR is required').not().isEmpty(),
    check('natureOfEntity', 'Nature of entity is required').not().isEmpty(),
    check('interest', 'Interest is required').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    startupController.registerStartup(req, res);
  }
);

// New GET route to fetch startup data by name
router.get('/:startupName', startupController.getStartupByName);

module.exports = router;