const mongoose = require('mongoose');
// const { getUsersData } = require('../controllers/userController');

const User = new mongoose.Schema( {


    name: String,
	balance:{
        type: Number,
       default : 100   // Default balance at user registration is 100
    },      
	address: String,
	age: Number,
 	gender:{
       type: String,
       enum:["male", "female", "other"]
         },     // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: {
        type : Boolean,
        default: false
    } // Default false value.
},{timestamps: true})

module.exports= mongoose.model("bookUser", User)



// 
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// // String, Number
// // Boolean, Object/json, array