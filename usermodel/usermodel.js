const mongoose=require('mongoose');
const userschema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required: true, unique: true,
    },
    phone:{
        type:String,
    }
})
const customerModel=mongoose.model('Model',userschema);
module.exports=customerModel;