import { productList } from './productlist.js';
import { cart } from './cart.js';

export class shop{
    constructor(){
        this.pList = new productList();
        this.currentCart = new cart();
    }
    async render() {
        const fetchData = await this.pList.fetchProducts();
        this.pList.setProductList(fetchData);
        this.pList.initrender();
    }
    categoryRender(category){
        this.pList.renderProductList(category);
    }
}