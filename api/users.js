const router = require('express').Router();
const { User, Product } = require('../db');

// GET /api/users
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

module.exports = router;
