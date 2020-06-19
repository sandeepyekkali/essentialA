const express = require('express')
const dataRoutes = require('./controller/dataRoutes')
const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000
const mongoUri = "mongodb+srv://dom:dom123@cluster0-h0cjn.gcp.mongodb.net/test?retryWrites=true&w=majority"

const app = express()
const upload = multer({dest:"public/"})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(upload.single("fileUpload"))

app.use(function (err, req, res, next) {
   console.log("This is the invalid field ->", err.field)
   next(err)
 })

// Routes
app.use("/api/data",dataRoutes)

mongoose.connect(mongoUri,{ useNewUrlParser: true , useUnifiedTopology: true },(err)=>{
   if(err){console.log(err);}
   else{console.log("Connection to Mongodb DB successful");}
});

app.listen(PORT,(err)=>{

   if(err) console.log(err)
   else console.log(`Listening on ${PORT}`)

})