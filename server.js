const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRoute = require('./Router/productRoute')


const app = express()
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.mongo_uri)
.then(()=>{
    console.log("Mongodb Connected Successfully");
})
.catch((err)=>{
    console.log(err)
})


app.use('/tst',(req,res)=>{
    res.send("Manikanta")
})

//middleware

app.use('/api',productRoute)


app.listen(5000,()=>{
    console.log("Server started and running on port 5000");
})

