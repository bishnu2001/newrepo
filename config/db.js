const mongoose=require('mongoose');
const db = mongoose.connect("mongodb://127.0.0.1:27017/krishdatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('database connected succfull')
})
module.exports=db;
