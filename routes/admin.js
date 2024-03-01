const express=require('express');

const router= express.Router();


router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='POST'><label>Name</label><input type='text' name='title'><br><label>Size</label> <input type='number' name='Size'><br><button type='submit'>Add</button></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});



module.exports=router;