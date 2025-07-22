const express=require('express')
const router=express.Router();
const student = require('../Models/student');
const multer=require('multer');
// set up multer to store files in / uploads folder
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/');
  },
  filename:(req, file, cd)=>{
    const sufix=Date.now;
    cd(null,sufix +'-'+file.originalname)
  }
})
const upload=multer({storage})

router.post('/create',upload.single('photo') ,async(req,res)=>{
  try{
    const {name,age,email,phone,address}=req.body;
    // create student record with Base64-encoded image
    const newStudent = new student({
      name,
      email,
      phone,
      address,
    });
    await newStudent.save();
    res.status(201).json({message:'student created successfully',student : newStudent})
  }
  catch(err){
    console.log(err)
    res.status(500).json({message:'Error creating student record'})
  }
})
module.exports=router