const mongoose = require("mongoose") 
//title=dogsearch
const dogSchema = mongoose.Schema({ 
   
    Dog_name: String, 
    Dog_color: String, 
    price: Number 
}) 
 
module.exports = mongoose.model("dog", dogSchema) 