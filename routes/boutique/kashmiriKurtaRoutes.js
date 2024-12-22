const express = require('express');
const router = express.Router();
const {
    createKashmiriKurta,
    getAllKashmiriKurtas,
    getKashmiriKurtaById,
    updateKashmiriKurta,
    deleteKashmiriKurta
} = require('../../controllers/Boutique/kashmiriKurtaController');
const isLogined = require('../../middlewares/auth');

// Routes
router.post('/',isLogined , createKashmiriKurta);
router.get('/', getAllKashmiriKurtas);
router.get('/:id', getKashmiriKurtaById);
router.put('/:id', updateKashmiriKurta);
router.delete('/:id', deleteKashmiriKurta);

module.exports = router;
