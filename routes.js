const express=require('express');
const mongoose=require('mongoose');
const order=require('./order');
const router=express.Router();
const {getorders,putorder}=require('./controller');
router.use(express.json());
router.get('/',getorders);
router.post('/',putorder);
module.exports=router;