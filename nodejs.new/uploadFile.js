const express=require("express");
const multer=require("multer");
const app=express();
const upload=multer({
    storage: multer.diskStorage({
       destination:function (req,file,cb)
        {
          cb(null,"uploads");
       },
       filename:function (req,file,cb) 
       {
         cb(null,file.fieldname+"-"+Date.now()+".jpg");
       }
    })
}).single('user-file');//that user-file we write in key of post api of put req before file uploading

app.post("/upload",upload,(req,res)=>{
res.send("done")
});
app.listen(4000);