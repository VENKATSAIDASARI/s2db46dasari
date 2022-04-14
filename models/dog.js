const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    Dog_name: String, 
    Dog_color: String, 
    price: Number 
}) 
 
module.exports = mongoose.model("Costume", 
costumeSchema) 