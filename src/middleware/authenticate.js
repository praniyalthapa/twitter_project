import passport from "passport";

//this is going to be like a middleware
export const authenticate=(req,res)=>{
    passport.authenticate('jwt',(err,user)=>{
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message:'Unauthorized access!'
            })
        }
        req.user=user;
        next();
    });
}