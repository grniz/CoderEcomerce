import productsModel from "./models/Product.js";


export default class products {
    
    get = (params) =>{
        return productsModel.find(params);
    }

    getBy = (params) =>{
        return productsModel.findOne(params);
    }

    save = (doc) =>{
        return productsModel.create(doc);
    }

    update = (id,doc) =>{
        return productsModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return productsModel.findByIdAndDelete(id);
    }
}