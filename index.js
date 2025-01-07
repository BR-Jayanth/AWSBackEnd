const express=require('express');
const app=express();
const dotenv=require('dotenv');
const port=process.env.PORT || 3000;
dotenv.config();




app.get('/',(req,res)=>{
    res.json({message:'hello world'});
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})