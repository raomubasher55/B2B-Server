const express = require('express');
const {
  createRug,
  getAllRugs,
  getRugById,
  updateRug,
  deleteRug
} = require('../../controllers/rugsAndCarpets/KitchenRugController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

router.post('/',isLogined , createRug);
router.get('/', getAllRugs);
router.get('/:id', getRugById);
router.put('/:id', updateRug);
router.delete('/:id', deleteRug);

module.exports = router;
