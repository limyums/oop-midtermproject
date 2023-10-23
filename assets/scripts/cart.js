export class cart {
    constructor() {
        this.items = [];
    }
    getTotal() {
        let total = 0;
        this.items.forEach((element) => {
            total += element.price;
        })
        return total.toFixed(2);
    }
    addProduct(productItem){
        this.items.push(productItem);
        this.render();
    }
    deleteProduct(index){
        this.items.splice(index,1);
        this.render();
    }
    render() {
        $(".cart").empty();
        $(".cart-list").empty();
        //update Total amout
        let tmpHtml =  `<h2>Total: $`+ this.getTotal() +`</h2>`
        tmpHtml += `<button>Order Now!</button>`
        $(".cart").append(tmpHtml);
        //update Cart-item list
        if(this.items.length != 0){
            this.items.forEach((element, index) => {
                let tmpCartHtml = `<div class="cart-item" name="` + index +`">`;
                tmpCartHtml += `<div>`;
                tmpCartHtml += `<div class="cart-title">` + element.title+ `</div>`;
                tmpCartHtml += `<div class="cart-price"> $` + element.price + `</div>`;
                tmpCartHtml += `<div class="btn-del-cart">-</div></div></div>`;
                $(".cart-list").append(tmpCartHtml);
            })
        }
        //gsap animation
        gsap.fromTo($(".cart-item"), { opacity : 0 } , { opacity : 1, duration : 1});
        gsap.fromTo($(".cart h2"), { opacity : 0 } , { opacity : 1, duration : 1});
        
    }
}