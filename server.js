const express=require('express');
const app=express();
const db=require('./config/db');
const routes=require('./routes/userroutes');

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({'name':'bishnu'})
})
app.use('/users', routes);

app.listen(4000,()=>{
    console.log('server running at port number 4000')
})