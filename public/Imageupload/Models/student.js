const mongoose=require('mongoose');


const studentschema=new mongoose.Schema({
  name:{ 
    type:String,

     unique:true,
  },
  age:{
    type:Number,
    required:false,
  },
  email:{
    type:String,
    required:false,
    
  },
  phone:{
    type:String,
    required:false,
  },
  address:{
    type:String,
    required:false
  }
});

module.exports=mongoose.model("studentdb",studentschema);