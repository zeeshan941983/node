// const mongoose=require('mongoose');
// const url="mongodb://localhost:27017/new";
// mongoose.connect(url);
// const ProductsSch= new mongoose.Schema({
// name:String,
// rollno:String,
// contact:Number
// });
//save data with mongoose

// const saveIndb=async()=>{

// const model= mongoose.model('Products',ProductsSch);
// let newdata= new model({

//     name:"zeeshan",rollno:"cu-1979-2021",contact:"03139265476"});
// let result=await newdata.save();
// console.log(result);

// }
// saveIndb();
//delete data with mongoose
// const deleteIndb=async()=>{

// const model=mongoose.model('products',ProductsSch);
// let deletedata=await model.deleteOne({
//     name:"zeeshan"
// });
// console.log("deleted");

// }
// deleteIndb();
//update data in db with mongoose
// const updateINdb=async()=>{
// const products=mongoose.model('products',ProductsSch);
// let data= await products.updateMany({name:"khan"},{
//     $set:{name:"ahmad",rollno:"cu-17-2020"}
// });

// console.log("done")
// }
// updateINdb();
//find or search (without parameter it will show all data when we sfacify inside it will find exact that one)
// const findIndb=async()=>{
//     const products= mongoose.model("products",ProductsSch);
//     const find=await products.find({name:"zeeshan",});
//     console.log(find);
// }
// findIndb();