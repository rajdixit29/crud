var express = require('express');
var router = express.Router();

const minModel=require("../routes/users");
const users = require('../routes/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/second", async(req,res,next)=>{
    await minModel.create({
    username:req.body.username,
    email:req.body.email,
    number:req.body.number
    
  })
  res.redirect("/second")
})
router.get('/second', async(req, res, next)=> {
   noUser=await minModel.find()
  res.render('second',{users:noUser});
});

router.get("/delete/:id",async(req,res,next)=>{
  await minModel.findOneAndDelete({_id:req.params.id})
  res.redirect("/second")
})

router.get("/update/:id",async(req,res,next)=>{
  const data=await minModel.findOne({_id:req.params.id})
  res.render('update',{data})
})


router.post('/update/:id', async(req, res, next)=> {
 await minModel.findOneAndUpdate({_id:req.params.id},{
  username:req.body.username,
  email:req.body.email,
  number:req.body.number
 })
 res.redirect("/second")
  ;
});


module.exports = router;
