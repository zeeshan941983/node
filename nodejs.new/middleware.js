///middleware
module.exports= (req,res,next)=>{
    if(!req.query.age){
      res.send("please enter age");
    }else if(req.query.age<18){
     res.send("you are under age");
    }else{
       next();
    }
 }