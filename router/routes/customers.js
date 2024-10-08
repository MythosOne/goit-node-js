const router = require('express').Router();

router.get('/', (req,res)=>{
    res.send("Get Customer");
});

router.get("/:id", (req,res)=>{
    res.send("Get Customer ID");
});

router.post("/", (req,res)=>{
    res.send("Create Customer");
});

router.put("/:id", (req,res)=>{
    res.send("Update Customer");
});

router.delete("/:id", (req,res)=>{
    res.send("Delete Customer");
});

module.exports = router;