const express = require('express');
const router = express.Router();
const {
    createKashmiriKaftan,
    getAllKashmiriKaftans,
    getKashmiriKaftanById,
    updateKashmiriKaftan,
    deleteKashmiriKaftan
} = require('../../controllers/Boutique/kashmiriKaftanController');
const isLogined = require('../../middlewares/auth');

// Routes
router.post('/',isLogined , createKashmiriKaftan);
router.get('/', getAllKashmiriKaftans);
router.get('/:id', getKashmiriKaftanById);
router.put('/:id', updateKashmiriKaftan);
router.delete('/:id', deleteKashmiriKaftan);

module.exports = router;
