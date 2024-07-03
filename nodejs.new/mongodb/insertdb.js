const connectdb=require("./mongodb");
const  name =async()=> {
  const db=await connectdb();
try {
    const result= db.insertMany([
        {name:'zeeshan',rollno:"1970-2021",Email:'zeeshanahmad@gmail.com',price:`2000`},
        
    ]);
 if((await result).acknowledged)
    console.log("inserted");
} catch (e) {
    console.log(`${e}`)
}
 



  

}
name();