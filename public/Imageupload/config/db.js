const mongoose=require('mongoose');
require('dotenv').config();

const mongoURL=process.env.MONGODB_URL_LOCAL


// setup mongodb connection
mongoose.connect(mongoURL,{
  useNewUrlparser:true,
  useUnifiedTopology:true,
})

const db=mongoose.connection;

db.on('connected',()=>{
  console.log('connected to mongodb server')
});
db.on('error',()=>{
  console.log('connected db error')
});
db.on('disconnected',()=>{
  console.log('disconnected to mongodb server')
});
