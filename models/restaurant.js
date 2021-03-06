const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectID } = require('mongodb');

const uniqueValidator = require('mongoose-unique-validator');

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       properties:
 *         _id:
 *           type: string
 *       email:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *
 *
 */
const dbRestaurantSchema = new Schema({
    // _id: {
    //     type: String,
    // },
    name: {
        type: String,
        required: true,
    },
    newid: {
        type: String,
        required: true,
    },
    isBusiness: {
        type: Boolean,
        required: true,
    },
    mainTitle: {
        type: String,
        required: true,
    },
    cuisine: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        max: 255,
    },
    phone: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: false,
    },
    mainPicture: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    coupons : {
        type: Array,
        required : true
    }
    
})
dbRestaurantSchema.plugin(uniqueValidator);
module.exports = mongoose.model('DBrestaurant', dbRestaurantSchema);