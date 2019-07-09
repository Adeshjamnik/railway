const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TrainCategorySchema = new Schema({

    name:{type:String},
    category:{type:String},
    
});


module.exports = mongoose.model('TrainCategory',TrainCategorySchema);