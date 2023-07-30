import asyncHandler from "express-async-handler";

// description Auth user and get token
// route POST/api/users/token
// access Public

const authUser=asyncHandler(async(req,res)=>{
    res.json({message:'Success'});
});

export {authUser}