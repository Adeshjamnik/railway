const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TrainSchema = new Schema({

    name:{type:String},
    category:{type:String},
    source:{type:String},
    destination:{type:String},
    inbetweenstations:{type:String}
});


module.exports = mongoose.model('Train',TrainSchema);