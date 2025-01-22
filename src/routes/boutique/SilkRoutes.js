const express = require('express');
const router = express.Router();
const silkController = require('../../controllers/boutique/SilkController');
const isLogined = require('../../middlewares/auth');


router.post('/',isLogined , silkController.createSilk); 
router.get('/', silkController.getAllSilks); 
router.get('/:id', silkController.getSilkById);
router.put('/:id', silkController.updateSilk);
router.delete('/:id', silkController.deleteSilk);

module.exports = router;
