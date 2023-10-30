import cartsModels from "./models/User.js";


export default class carts {
    
    get = (params) =>{
        return cartsModels.find(params);
    }

    getBy = (params) =>{
        return cartsModels.findOne(params);
    }

    save = (doc) =>{
        return cartsModels.create(doc);
    }

    update = (id,doc) =>{
        return cartsModels.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return cartsModels.findByIdAndDelete(id);
    }
}