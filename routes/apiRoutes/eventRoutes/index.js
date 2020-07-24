const router = require('express').Router();

const {
  createEvent,
  findEventById,
  findEventsByDate,
} = require('../../../controllers/eventController');

const { requireAuth } = require('../../../middlewares/authMiddleware');

// /api/Events
router.route('/events')
  .get(requireAuth, findEventById)
  .post(requireAuth, createEvent);

router.route('/findeventsbydate')
  .get(findEventsByDate);


module.exports = router;
