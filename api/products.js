const router = require('express').Router();
const { Product, User } = require('../db');

// GET /api/products
router.get('/', (req, res, next) => {
  Product.findAll({ include: [User] })
    .then(products => res.json(products))
    .catch(next);
});

// PUT /api/products/:id
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;

  Product.update({ userId }, { where: { id } }).then(() => {
    res.sendStatus(204);
  });
});

module.exports = router;
