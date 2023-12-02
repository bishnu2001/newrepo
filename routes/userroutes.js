const express=require('express');
const { customer, customerinfo, update, deletecustomerinfo }=require('../controller/usercontroller')

const router=express.Router();
router.post('/user',customer);
router.get('/user',customerinfo);
router.put('/user/:userid',update);
router.delete('/user/:userid', deletecustomerinfo)


module.exports=router;