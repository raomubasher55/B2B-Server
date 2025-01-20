const express = require('express');
const {
    createVendorApplication,
    getAllVendorApplications,
    getVendorApplicationById,
    updateVendorApplication,
    deleteVendorApplication
} = require('../controllers/vendorApplicationController');
const router = express.Router();
const isLogined = require('../middlewares/auth');


router.post('/',isLogined , createVendorApplication);
router.get('/', isLogined ,getAllVendorApplications);
router.get('/:id',isLogined , getVendorApplicationById);
router.put('/:id',isLogined , updateVendorApplication);
router.delete('/:id',isLogined , deleteVendorApplication);

module.exports = router;
