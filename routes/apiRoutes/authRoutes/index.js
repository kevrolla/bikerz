const router = require('express').Router();
const { signUp, signIn } = require('../../../controllers/userController');
// /api/auth/signup
const { requireSignIn } = require('../../../middlewares/authMiddleware');

router.route('/signup')
  .post(signUp);

router.route('/signin')
  .post(requireSignIn, signIn);

module.exports = router;
