const router = require('express').Router();
const controller = require('../controllers/boards');

router.post('/boards', controller.createItem);
router.put('/boards/:id', controller.updateItem);

module.exports = router;
