const customerModel=require('../usermodel/usermodel')
const customer= async(req,res)=>{
   const {email,name,phone}=req.body;
   try {
        const create=await customerModel.create({
            name:name,
            email:email,
            phone:phone
        });
       res.status(201).json(create);
   } catch (error) {
       res.status(500).json({ error: 'user not found' })
   }

}
const customerinfo=async(req,res)=>{
    try {
        const getinfo=await customerModel.find();
        res.status(200).json(getinfo);
    } catch (error) {
        res.status(500).json({ error: 'user not found' })
    }
}
const update=async(req,res)=>{
    try {
        const paramid = await customerModel.findByIdAndUpdate(
            req.params.userid,
            req.body,
            { new: true }

            
        )
        if (!paramid) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(paramid);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
const deletecustomerinfo=async(req,res)=>{
    try {
        const user = await customerModel.findByIdAndDelete(req.params.userid);
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { customer, customerinfo, update, deletecustomerinfo };