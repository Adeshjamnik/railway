const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    name:{type:String},
    username:{type:String},
    aadhaar:{type:String},
    email:{type:String},
    password:{type:String}
});


module.exports = mongoose.model('Users',UserSchema);