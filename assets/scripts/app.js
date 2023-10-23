import { shop } from './shop.js';

class app {
    constructor(){
        this.shop = new shop();
    }
    init() {
        this.shop.render();
    }
    addProductToCart(id) {
        this.shop.currentCart.addProduct(this.shop.pList.products[id-1]);
    }
    deleteProductToCart(index){
        this.shop.currentCart.deleteProduct(index);
    }
    renderByCategory(category){
        this.shop.categoryRender(category);
    }
}

$(() => {
    const currentApp = new app();
    currentApp.init();
    
    $(document).on("click", ".btn-item", function() {
        let id = $(this).parent().parent().parent().attr("id");
        currentApp.addProductToCart(id);
    });
    $(document).on("click", ".btn-del-cart", function() {
        let index = $(this).parent().parent().attr("name");
        currentApp.deleteProductToCart(index);
    });
    $(document).on("click", ".category-item", function() {
        currentApp.renderByCategory($(this).text());
    });

})