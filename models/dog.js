const mongoose = require("mongoose") 

const dogSchema = mongoose.Schema({ 
    Dog_name: String, 
    Dog_color: String, 
    price: Number 
}) 
 
module.exports = mongoose.model("dog", dogSchema) 