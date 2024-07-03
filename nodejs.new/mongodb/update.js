const connectdb=require("./mongodb");
const  update =async()=> {
  const db=await connectdb();
try {
    const result= db.updateMany({name:'zeeshan'}, {
        $set: {name:'zeeshan',rollno:"1970-2021",Email:'zeeshanahmad@gmail.com',price:`2000`},
    }
    );
 if((await result).acknowledged)
    console.log("updated");
} catch (e) {
    console.log(`${e}`)
}
 



  

}
update();