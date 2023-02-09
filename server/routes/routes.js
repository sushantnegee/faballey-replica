const {ProductModel} = require('../models/model')
const express = require('express');

const routes = express.Router();

routes.get('/products',async (req,res)=>{
    const data = await ProductModel.find();
    res.send({
        data:data
    })
})

module.exports = {routes}