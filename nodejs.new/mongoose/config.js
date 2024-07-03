const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";
mongoose.connect(url).then(console.log("connected"));
