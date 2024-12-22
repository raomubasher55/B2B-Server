const express = require('express');
const router = express.Router();
const {
    createKashmiriJacket,
    getAllKashmiriJackets,
    getKashmiriJacketById,
    updateKashmiriJacket,
    deleteKashmiriJacket
} = require('../../controllers/Boutique/kashmiriJacketController');
const isLogined = require('../../middlewares/auth');

// Routes
router.post('/',isLogined , createKashmiriJacket);
router.get('/', getAllKashmiriJackets);
router.get('/:id', getKashmiriJacketById);
router.put('/:id', updateKashmiriJacket);
router.delete('/:id', deleteKashmiriJacket);

module.exports = router;
