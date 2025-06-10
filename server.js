const express = require('express');
const app = express()


app.use('/tst',(req,res)=>{
    res.send("Manikanta gama")
})


app.listen(5000,()=>{
    console.log("Server Started Running at port 5000!");
})