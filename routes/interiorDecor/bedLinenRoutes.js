const express = require('express');
const {
  addBedLinen,
  getAllBedLinens,
  getBedLinenById,
  updateBedLinen,
  deleteBedLinen
} = require('../../controllers/interiorDecor/bedLinenController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

router.post('/',isLogined , addBedLinen);
router.get('/', getAllBedLinens);
router.get('/:id', getBedLinenById);
router.put('/:id', updateBedLinen);
router.delete('/:id', deleteBedLinen);

module.exports = router;
