const express = require('express');
const { 
    createSubsidiary, 
    getAllSubsidiaries, 
    getSubsidiaryById, 
    updateSubsidiary, 
    deleteSubsidiary 
} = require('../controllers/subsidiaryController');
const router = express.Router();
const isLogined  = require('../middlewares/auth')


router.post('/', isLogined , createSubsidiary);
router.get('/',isLogined , getAllSubsidiaries);
router.get('/:id',isLogined , getSubsidiaryById);
router.put('/:id',isLogined , updateSubsidiary);
router.delete('/:id',isLogined , deleteSubsidiary);

module.exports = router;
