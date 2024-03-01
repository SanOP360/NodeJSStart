const express=require('express');
const boydParser = require("body-parser");


const app= express();

app.use(boydParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
  
  next();
})
app.use("/add-product", (req, res, next) => {
  
  res.send(
    "<form action='/product' method='POST'><label>Name</label><input type='text' name='title'><br><label>Size</label> <input type='number' name='Size'><br><button type='submit'>Add</button></form>"
  );
});

app.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req, res, next) => {
  
  res.send('<h1>Hello from Express</h1>');
});


app.listen(3000);



