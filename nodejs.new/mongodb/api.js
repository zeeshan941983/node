const express=require("express");
const app=express();
const connectdb=require("./mongodb");
app.use(express.json());
///for getting data
// app.get("/",async(req,res)=>{
//     let data=await connectdb();
//    let dbdata= await data.find().toArray();
//     console.log(dbdata);
// res.send(dbdata);
// });
//for sending data
// app.post("/",async(req,res)=>{
   
//    res.send(req.body);
//    let data= await connectdb();
//    db=await data.insertOne(req.body);
// });
//update data
// app.put("",async(req,res)=>{
//  let db=await connectdb();
//  res.send(req.body);
//  data=await db.updateMany(
//     { name:req.body.name},{$set:req.body}
    
//  );
 

// });
//delete data api
// const mongodb=require("mongodb");
// app.delete("/:id",async(req,res)=>{
// let db=await connectdb();
// console.log(req.params.id);
// res.send("got id");
// let result=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id) });
// console.log(result);
// });
// app.listen(4000);