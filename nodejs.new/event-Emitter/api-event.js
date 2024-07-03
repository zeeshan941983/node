// const express=require("express");
// const Evenemit=require("events");
// const app=express();
// const event=new Evenemit();
// let count=0;
// event.on("countApi",()=>{
//     count++
// console.log("api called",count)
// });
// app.get("/",(req,res)=>{
// res.send("done");
// event.emit("countApi");
// });
// app.listen(4000);