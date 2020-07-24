const router = require('express').Router();
const eventRoutes = require('./eventRoutes');
const authRoutes = require('./authRoutes');
// /api prepended to everyRoute inside of here
router.use('/auth', authRoutes);
router.use('/event', eventRoutes);
module.exports = router;