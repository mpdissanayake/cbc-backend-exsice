import product from "../models/product.js";

export async function getProduct(req,res){
try{
    const productList=await product.find()
    
    res.json({
        list:productList
    })
}catch(e){
    res.json({
        message:"productListError"
    })
}
    
    
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