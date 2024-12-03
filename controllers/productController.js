import product from "../models/product.js";

export function getProduct(req,res){
    product.find()
    .then((productList)=>{
        res.json({
            list:productList
        })
    }).catch((error)=>{
        res.json({
            message:"error",
            error :error.message
        })
    })
}

export function createProduct(req,res){
    const newProduct=new product(req.body)
    
     newProduct.save()
     .then(()=>{
        res.json({
            message:"Product Created"
        });

    })
    .catch((error)=>{
        console.error(error);
        res.json({
            message:"product creating Failed"
        })
    })
}

export function deleteProduct(req,res){
    product.deleteOne({name:req.body.name}).then(()=>{
        res.json({
            message:"Product Deleted succesfuly"
        })
    }).catch(()=>{
        res.json({
            message:"product Not deleted"
        })
    })
}