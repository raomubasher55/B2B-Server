const express = require('express');
const {
  createBedroomRug,
  getAllBedroomRugs,
  getBedroomRugById,
  updateBedroomRug,
  deleteBedroomRug
} = require('../../controllers/rugsAndCarpets/bedroomController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

router.post('/',isLogined , createBedroomRug);
router.get('/', getAllBedroomRugs);
router.get('/:id', getBedroomRugById);
router.put('/:id', updateBedroomRug);
router.delete('/:id', deleteBedroomRug);

module.exports = router;
