require('dotenv').config();
const PORT=process.env.PORT;
const URL=process.env.MONGO_URL;
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const router=require('./routes');
const middleWare=require('./errorr');
app.use(middleWare);
app.use('/orders',router);
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome to Orders');

});
mongoose.connect(URL)
.then(
app.listen(PORT,()=>{
    
    console.log('serving');
}));