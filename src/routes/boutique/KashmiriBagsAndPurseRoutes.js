const express = require('express');
const router = express.Router();
const KashmiriBagsAndPurse = require('../../controllers/boutique/KashmiriBagsAndPurseController');
const isLogined = require('../../middlewares/auth');

router.post('/',isLogined , KashmiriBagsAndPurse.createBag); 
router.get('/', KashmiriBagsAndPurse.getAllBags); 
router.get('/:id', KashmiriBagsAndPurse.getBagById);
router.put('/:id', KashmiriBagsAndPurse.updateBag);
router.delete('/:id', KashmiriBagsAndPurse.deleteBag); 

module.exports = router;
