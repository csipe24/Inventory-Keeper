const router =require("express").Router();
const dev ={
    status:"In development"
}

// Placeholder API routes

router.get("/api/items", function(req, res){
    console.log("Read Items");
    res.json(dev);
});
    
router.post("/api/items", function(req, res){
    console.log("Create Items");
    res.json(dev);
});
    
router.delete("/api/items/:id", function(req, res){
    console.log("Delete Items");
    res.json(dev);
});

router.get("/api/categories", function(req, res){
    console.log("Read categories");
    res.json(dev);
});
    
router.post("/api/categories", function(req, res){
    console.log("Create categories");
    res.json(dev);
});
    
router.delete("/api/categories/:id", function(req, res){
    console.log("Delete categories");
    res.json(dev);
});
    
module.exports = router;