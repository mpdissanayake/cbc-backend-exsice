import express from "express";

const productRouter=express.Router();

productRouter.get("/",(req,res)=>{
    console.log("This is a GET reqest from productsRouter")
    res.json({
        message:"This is a GET reqest from productsRouter"
    });
});
productRouter.post("/",(req,res)=>{
    console.log("This is a GET reqest for productsRouter")
    res.json(
        {
            message:"This is post Reqest for ProductRouter"
        });
})

export default productRouter;