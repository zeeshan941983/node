const connectdb=require("./mongodb");
const delet =async()=>{
 const connect= await connectdb();
 const result= await connect.deleteMany({name:"zeeshan"});
 if(result.acknowledged)
 console.log("deleted");
}
delet();