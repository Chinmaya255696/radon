const mongoose = require('mongoose');

const product = new mongoose.Schema({

    name:String,
    category:String,
 	price:{
         type: Number,
         required : true
     }
})

module.exports= mongoose.model("Product", product)








// name:"Catcher in the Rye",
// 	category:"book",
// 	price:70 //mandatory property
// }