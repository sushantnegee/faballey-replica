const express = require('express');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: Number,
    uniqueId: Number,
    category: String,
    length: String,
    sleeves: String,
    title: String,
    color: String,
    discount: Number,
    price2: Number,
    price1: Number,
    site: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String
})

const ProductModel = mongoose.model('product',productSchema);

module.exports = {ProductModel};