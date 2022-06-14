const mongoose = require('mongoose');

ObjectId= mongoose.Schema.Types.ObjectId
const orderModel= new mongoose.Schema({
userId: {

    type:ObjectId,
    ref:"bookUser"
},
productId: {
    type:ObjectId,
    ref:"Product"
},
amount: Number,

isFreeAppUser:  Boolean,
    

date: {type: Date , default : Date.now()}
},{timestamps: true})

module.exports= mongoose.model("RecordOfBookandUser",orderModel)