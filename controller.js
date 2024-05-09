const express=require('express');
const mongoose=require('mongoose');
const order=require('./order');

const getorders=async(req,res)=>{
    const orders= await order.find({});
    res.send(orders);
}
const putorder=async(req,res)=>{
    const neworder=await order.create(req.body);
    res.send('Order Placed!');

}
module.exports={getorders,putorder};