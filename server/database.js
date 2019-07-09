const mongoose = require ('mongoose')

mongoose.connect("mongodb+srv://adesh:172829@cluster0-grrym.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>{console.log("Connected Successfully to Database")})
.catch((err)=>{console.log(err)});
