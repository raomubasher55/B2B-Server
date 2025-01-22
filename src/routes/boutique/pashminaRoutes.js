const express = require('express');
const router = express.Router();
const boutiqueController = require('../../controllers/boutique/pashminaController');
const isLogined = require('../../middlewares/auth');

router.post('/', boutiqueController.createBoutique);
router.get('/', boutiqueController.getAllBoutiques);
router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', boutiqueController.updateBoutique);
router.delete('/:id', boutiqueController.deleteBoutique);

module.exports = router;
