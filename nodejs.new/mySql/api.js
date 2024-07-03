const express = require("express");
const app = express();
// const con = require("./mysqlConfig");


app.use(express.json());

// const URL = "https://zenquotes.io/api/random";

// async function getquotes(url) {
//   let res = await fetch(url);
//   let get = await res.json();
//   let quotes = get[0].q;
//   let Author = get[0].a;
//   let detail = get[0].h;

//   return { quotes, Author, detail };
// }

// app.post("/", async (req, res) => {
//   try {
//     const { quotes, Author, detail } = await getquotes(URL);
//     const data=[Author,quotes,detail];
//     con.query("INsert INTO quotes SET Author=?,quotes=?,detail=?", data,(err,result)=>{
// if(err){
//     res.send(err)
// }else{
//     if (result.affectedRows === 0) {
//                        res.status(404).send({ error: "No such data with the specified RollNo" });
//                     } else {
//                        res.send(result);
//                     }
// }
//     })
   
//   } catch (e) {
//     res.send(e);
//   }
// });

// app.listen(8080);

// app.get("/:name", (req, res) => {
//    const data=req.params.name;
  
// res.send(data);
// });

// app.get("", (req, res) => {
//    try {
//       con.query("select * from shan", (err, result) => {
//          if (err) {
//             console.log("error");
//          }
//          else {
//             console.log(result);
//             res.send(result);
//          }
//       })
//    } catch (e) {
//       res.status(500).json({ error: e.message });
//    }


// });
// app.post("/post", (req, res) => {

//    try {
//       const data = req.body;
//       con.query("INsert INTO shan SET?", data, (err, result, filed) => {
//          if (err) { 
//              return  res.status(400).json({error:err.sqlMessage});
//           }
//          else{
//             res.send(result);
//          }

//       });
//    } catch (e) {
//       res.status(500).json({ error: e.message });
    
//    }


// });
// app.put("/put/:name", (req, res) => {
//    try {
//       const RollNo = [req.params.name];
//       const data = [req.body.name, req.body.fatherName, req.body.RollNo, req.params.name];
//       con.query('UPDATE shan SET name = ?, fatherName = ?, RollNo = ? WHERE RollNo = ?', data, (err, result) => {
//          if (err) {
//             console.log(err.sqlMessage);
//             res.send({ error: err.sqlMessage });
//          } else {
//             if (result.affectedRows === 0) {
//                res.status(404).send({ error: "No such data with the specified RollNo" });
//             } else {
//                res.send(result);
//             }
//          }
//       });
//    } catch (e) {
//       res.status(500).json({ error: e.message });
//    }
// });

// app.delete("/del/:name1",(req,res)=>{
//    try {
//       const data=[req.params.name1];
//       con.query('Delete from shan where name=?',data,(err,field,result)=>{
//          if (err) { 
//             console.log(err.sqlMessage);
//             res.send(err.sqlMessage);
//             return res.status(400).json({error:err.sqlMessage})
//           }
//           res.send(result);
//          })
      
//    } catch (e) {
//       res.status(500).json({ error: e.message });
//    }
  
// });
// app.listen(8080);
//sending email with node.js
// const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'zeeshanahmad941983@gmail.com',
//     pass: 'vfmj tkev wzis dufg'
//   }
// });

// // Email data
// const mailOptions = {
//   from: 'zeeshanahmad941983@gmail.com',
//   to: 'zeeshanahmad941985@gmail.com',
//   subject: 'Hello from Node.js',
//   text: 'This is a test email sent from Node.js using nodemailer.'
// };

// // Send email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });
app.set("view engine","ejs");
app.use(express.static("./Public"));
app.get('/',(req,res)=>{
   res.render("index1",{name:"Zeeshan"});
});
app.get('/about',(req,res)=>{
   res.render("about",{name:"Zeeshan"});
});
app.listen(8080);