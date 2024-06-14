const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mindb")
.then(()=>console.log("db connected"))
.catch((error)=>console.log("error message"))

const userSchema=mongoose.Schema({
  username:String,
  email:String,
  number:String,

})

module.exports=mongoose.model("user",userSchema)