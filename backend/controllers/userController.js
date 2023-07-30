import asyncHandler from "express-async-handler";

// description Auth user and get token
// route POST/api/users/token
// access Public

const authUser=asyncHandler(async(req,res)=>{
    res.json({message:'Success'});
});

// description Register a new user
// route POST/api/users/
// access Public

const registerUser=asyncHandler(async(req,res)=>{
    res.send('register user');
});

// description Logout user / clear cookie
// route POST/api/users/profile
// access Private

const logoutUser=asyncHandler(async(req,res)=>{
    res.send('logout user');
});

// description Get user profile
// route GET/api/users/profile
// access Private

const getUserProfile=asyncHandler(async(req,res)=>{
    res.send('get profile');
});

// description Update user profile
// route PUT/api/users/profile
// access Private

const updateUserProfile=asyncHandler(async(req,res)=>{
    res.send('update profile');
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}