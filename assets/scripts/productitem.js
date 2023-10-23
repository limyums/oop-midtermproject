import { product } from './product.js';

export class productItem extends product{
    addToCart() {
       return this;
    }
    render() {
        let tmpHtml = `<div class="product-item" id="` + this.id +`">`;
        tmpHtml += `<div> <img src="`+ this.image + `"/>`;
        tmpHtml += `<div>`;
        tmpHtml += `<h2>` + this.title+ `</h2>`;
        tmpHtml += `<h3> $` + this.price + `</h3>`;
        tmpHtml += `<p>` + this.description+ `</p>`;
        tmpHtml += `<button class="btn-item" type="button">Add to Cart</button></div></div></div>`;
        return tmpHtml;
    }
}