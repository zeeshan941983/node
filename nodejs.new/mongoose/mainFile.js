const express = require("express");
require("./config");
const products = require("./products");


const app = express();
app.use(express.json());
//insert data
var record = {
    name: "${controller1.text}",
    fatherName: "${controller2.text}",
    Contact: "frompick[i][0]",
    Address: "frompick[i][1]",

};
app.post('/create', async (req, res) => {
    const data = new products({
        name: req.body.name,
        fatherName: req.body.fatherName,
        Contact: req.body.Contact,
        Address: req.body.Address
    });
    let saved = await data.save();
    res.send(saved);
    console.log(saved);
});
app.get('/', async (req, res) => {
    let data = res.send("hello");
    // let result = await data.save();
    // res.send();
    console.log(data);
});
//get data
// app.get("/get",async(req,res)=>{
//    let data=await products.find();
//    console.log(data);
//    res.send(data)
// });
// delete data
// app.delete("/del/:_id",async(req,res)=>{
//  console.log(req.params)
//   let data=await  products.deleteOne(req.params);
//   if(data.deletedCount==0){
//     res.send('already delete or no id avalible')
//   }

// });
//update data
// app.put("/update/:_id",async(req,res)=>{
//    let data=await products.updateOne(req.params,{$set:{name:"ahmad"or we can get data from postman body also for that we ahve to use req.body}});
// res.send(data);
//search
// app.get("/search/:key",async(req,res)=>{

//     let data=await products.find({
//     "$or":[
//         {"name":{$regex:req.params.key}}
//         //if we need to search in other fields then we can add below like roll number or address
//     ],

//     });

//     res.send(data);
// });

// });
app.listen(4000);