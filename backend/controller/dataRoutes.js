const express = require('express')
const mongoose = require('mongoose')

const route = express.Router()

const dataModel = require('../model/dataModel')

// Routing for /api/data

route.get('/',(req,res)=>{
    dataModel.find()
    .then((docs)=>{
        res.json(docs)
    })
})

route.post('/',(req,res)=>{
     console.log(req.body)
     
     const newDataModel = new dataModel(req.body)

     newDataModel.save(req.body)
     .then(data=>{
        res.status(200).send("Success saving Data") 
     }).catch(err=>{
         res.send("Cannot save data" + err)
     })
})

module.exports = route