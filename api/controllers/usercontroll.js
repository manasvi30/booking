import User from "../models/User.js"


export const updateUsers = async (req,res,next)=>
{
    try{
        const updatedUser =  await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
         res.status(200).json(updatedUser)
    }catch(err)
    {
        next(err);
    }

}
export const deleteUsers = async (req,res,next)=>
{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted");
   }catch(err)
    {
        next(err);
    }
}
export const getUsers = async (req,res,next)=>
{
    try{
        const Users =  await User.findById(req.params.id)
         res.status(200).json(Users)
    }catch(err)
    {

        next(err);
    }
}
export const getallUsers = async (req,res,next)=>
{
    
    try{
        const userr =  await User.find()
         res.status(200).json(userr)
    }catch(err)
    {
        next(err);
    }
}