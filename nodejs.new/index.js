const { name } = require("ejs");
const express = require("express");
const app = express();

//============================> (1)
const fs = require('fs');
// const http=require("http");
// const arr=[1,2,3,5,5,2,6]; 
// let result;


// result=arr.filter((item)=>{
//     return item>3;
//     });


// console.log("chalk.default.blue");
/////filesystem
fs.writeFileSync("hello.txt", "hello this is my first file");
///or we can import like this also if  we need single parameter require("fs").writefilesync;
////we have to create a server

///createserver hvae to pass parameter through fuction(()=>{})
// (code) -->>
// const http=require("http");
// const data=require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'})
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000);

//(code)--> form cammand line we can delete add and update
// console.log(process.argv);

// var pr=process.argv;
// if(pr[2]=="add"){
//     fs.writeFileSync(pr[3],pr[4])
// }else if(pr[2]=="rem"){
// fs.unlinkSync(pr[3])
// }else{
//   console.log  ("invalid option");
// }

//genrate files in folder through fs and path module
///first make sure create folder
//(code)-->>
// const path =require('path');
// const dirName=path.join(__dirname,'foldername');
// // -->create files in loop(start)
// for(i=0;i<4;i++){
//     fs.writeFileSync(dirName+"/hello"+i+".txt","i am fine");
// }
// //(end loop)
// console.log(dirName);
// // -->to show that file names in commandline
// fs.readdir(dirName,(err,files)=>{
//     files.forEach(element => {
//         console.log(element);
//     });
// });
//genrate files in folder ended

// CRUD(create ,read ,update,delete,rename) oprations in file system
//-->(code)
//  const path=require('path');
//  const dirpath=path.join(__dirname,'file');
//  const filepath=`${dirpath}/crud.txt`;
//  first we create file with fs.write... with name of crud.txt
//  fs.writeFileSync(filepath,"hello this is crud");
//here we read file if we use without utf-8 then it will show data in buffer coz of that we use utf-8
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// });
//update file text but its doesn't override it just add more text
// fs.appendFile(filepath,"hello iam zeeshan",(err)=>{
//     if(!err){
//         console.log('file is updated');
//     }
// });
//rename file name
// fs.rename(filepath,`${dirpath}/newfilename`,(err)=>{
//     if(!err){
//                 console.log('file name is updated');
//             }else{
//                 console.log(err);
//             }
// })
// //delete file
// fs.unlinkSync(`${dirpath}/name_updated`);
//(CRUD ended)

//synchronus and asynchronous data
//sychrouns exicuting wait for first task to exicute then another task exute
//asynchronous exicute at time all tasks and can't wait for each
// (code)-->
// example
// let a=10;
// let b=0;
// when we exicute code first a+b will sum which B will be 0 becouse when B value changes it take time
// setTimeout(() => {
//     b=30;
//     console.log(b);
// }, 2000);
// console.log(a+b);

// handle asychrounous data
//first we have to create a promise which give data to B
// let waitingdata=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // b=30;
// resolve(30)
//     }, 2000);
// }) 
//it wait for exicution time when it finish then it show data
// waitingdata.then((result) => {
//     b=result;
//     console.log(a+b);
// });
// (ended)
//  ======================>(2)
//Advance 
// (express js) install express (npm i express)

// const reqfilter=require("./middleware");
//single level middleware
//apply on all app this middleware will used
// app.use(reqfilter);
// app.get('',reqfilter,(req,res)=>{
//    res.send("hello how r u");
// });

app.get('/about', (req, res) => {

  res.send("this is about");
});
//(if we have 30 routes and we have to apply middleware on 20 we don't have to pass middleware to everyone we have to use route =express.route(),and for use route.use(middlewarename))
//group level middleware
// const route=express.Router();
// route.use(reqfilter);
// app.get('',(req,res)=>{
//    res.send("hello how r u");
// });

// route.get('/about',(req,res)=>{

//     res.send("this is about");
//  });
//  route.get('/contact',(req,res)=>{

//    res.send("this is contact");
// });
// app.use('/',route);
// app.listen(2000);
//local mongodb connection

//  const connectdb=require("./mongodb");

// const main= async()=> {
//   let data= await connectdb();
//   data=await data.find().toArray();
//   console.log(data);

//  }
// main();
//////sockets
const Port = 4000;

// const mongodb=require("mongoose");

// const Url="mongodb://localhost:27017/news";
// mongodb.connect(Url);









// const Schema=new mongodb.Schema({
//   name:
//     String,


//   FName:
//     String,

//  });


// const socket=require("socket.io") ;
// const io = new socket. Server(3000);

// io.on( "connection", (socket) => {

//   const model= mongodb.model("data",Schema);
//   const data= new model({
//   name:"Kashif",
//   FName:"Ahmad",
//   });

// data.save();

//     socket.emit("alldata", model.find({}));


// });
// const ioc=require("socket.io-client") ;

// const socketc=ioc("ws://localhost:3000");

// socketc.on("hello",(data)=>{
// console.log(data);
// });
// socketc.on("alldata",({data})=>{
//   console.log(data);
//   });





const mongoose = require("mongoose");
const Url = "mongodb://localhost:27017/news";
mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = new mongoose.Schema({
  name: String,
  FName: String,
  Phone: Number,
});

const Model = mongoose.model("data", Schema);

const socket = require("socket.io");
const io = new socket.Server(3000);

io.on("connection", async (socket) => {

  try {
    const senData = Model({
      name: "Ahmad",
      FName: "Khan",
      Phone: 3139265476,
    })


    const send = senData.save();
    socket.emit("Send", { send });

    const data = await Model.find({});
    socket.emit("alldata", { data });
  } catch (error) {
    console.error(error);
  }
});

const ioc = require("socket.io-client");
const socketc = ioc("http://localhost:3000");

socketc.on("send", (data) => {
  console.log(data);
});

socketc.on("alldata", ({ data }) => {
  // Data from the MongoDB "news" collection will be received here
  console.log(data);
});





