const express = require("express")
const router = express.Router();
const TrainCategory = require("../models/traincategory.model");




router.get('/',(req,res)=>{
    TrainCategory.find({},(err,users)=>{
        res.json(users);

    })
});


router.post('/post',(req,res)=>{
   let user = new TrainCategory(req.body.user);
   user.save()
   .then(()=>{res.json("ok")})
   .catch(err=>console.log(err))

})



router.get('/delete/:id',(req,res)=>{
    TrainCategory.findOneAndRemove({_id:req.params.id},(err,user)=>{
        if(err){
            res.json("error")
        }else{
            res.json("Deleted Success fully")
        }
    })
})



module.exports = router;