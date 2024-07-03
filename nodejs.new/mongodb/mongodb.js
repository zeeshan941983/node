const {MongoClient}=require("mongodb");
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

async function connectdb() {
    let result= await client.connect();
    let db= result.db('new');
    return connect=db.collection('products');
  
  }
  module.exports=connectdb;