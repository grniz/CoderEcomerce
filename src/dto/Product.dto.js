export default class productDTO {
    static getproductInputFrom = (product) =>{
        return {
            title:product.name||'',
            price:product.price||'',
            code: product.code||'',
            category:product.category||'',
        }
    }
}