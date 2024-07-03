app.set("view engine","ejs");
app.use(express.static("./Public"));
app.get('/',(req,res)=>{
   res.render("index1",{name:"Zeeshan"});
});
app.get('/about',(req,res)=>{
   res.render("about",{name:"Zeeshan"});
});
app.listen(8080);