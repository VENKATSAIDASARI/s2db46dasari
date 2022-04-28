const mongoose = require("mongoose")
//title=dogsearch
const dogSchema = mongoose.Schema({

    Dog_name: { type: String, required: [true, "Name of dog can not be blank"] },
    Dog_color: { type: String, required: [true, "Dog Color can not be blank"] },

    price: {
        type: Number, required: [true, "Price of the dog is required"],
        min: [10, "dog price Should be minimum of $100 "],
        max: [500000, "dog price Cannot be greater than $500000 "]
    }
})

module.exports = mongoose.model("dog", dogSchema) 