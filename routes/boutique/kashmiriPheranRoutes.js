const express = require('express');
const router = express.Router();
const {
    createKashmiriPheran,
    getAllKashmiriPherans,
    getKashmiriPheranById,
    updateKashmiriPheran,
    deleteKashmiriPheran
} = require('../../controllers/Boutique/kashmiriPheranController');
const isLogined = require('../../middlewares/auth');

// Routes
router.post('/',isLogined , createKashmiriPheran);
router.get('/', getAllKashmiriPherans);
router.get('/:id', getKashmiriPheranById);
router.put('/:id', updateKashmiriPheran);
router.delete('/:id', deleteKashmiriPheran);

module.exports = router;
