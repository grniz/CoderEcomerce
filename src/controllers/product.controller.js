import productDTO from "../dto/Product.dto.js";
import { ProductService } from "../service/index.js";
import __dirname from "../utils/index.js";

const getAllproducts = async(req,res)=>{
    const products = await ProductService.getAll();
    res.send({status:"success",payload:products})
};

const createproduct = async(req,res)=> {
    const {title,price,code,category,stock} = req.body;
    if(!title||!price||!code||!category||!stock) return res.status(400).send({status:"error",error:"Incomplete values"})
    const product = productDTO.getproductInputFrom({title,price,code,category,stock});
    const result = await ProductService.create(product);
    res.send({status:"success",payload:result})
};

const updateproduct = async(req,res) =>{
    const productUpdateBody = req.body;
    const productId = req.params.pid;
    const result = await ProductService.update(productId,productUpdateBody);
    res.send({status:"success",message:"product updated"})
};

const deleteproduct = async(req,res)=> {
    const productId = req.params.pid;
    const result = await ProductService.delete(productId);
    res.send({status:"success",message:"product deleted"});
};

export default {
    getAllproducts,
    createproduct,
    updateproduct,
    deleteproduct,
};