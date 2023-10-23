import { productItem } from './productitem.js';

export class productList {
    constructor() {
        this.products = [];
        this.category = [];
    }
    async fetchProducts() {
        const resData = await fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then((data) => {
                return data;
            })
        return resData;
    }

    setProductList(data) {
        //category list setting remove duplicate category
        let categoryData = [];
        for (let index = 0; index < data.length; index++) {
            if (data.map(i => i.category).indexOf(data[index].category) == index) {
                categoryData.push(data[index]);
            }
        }
        categoryData.forEach((element) => {
            this.category.push(element.category);
        })
        // product item setting
        data.forEach((element) => {
            let tmpProductItem = new productItem(element.id, element.title, element.price, element.description, element.image, element.category);
            this.products.push(tmpProductItem);
        })
    }
    initrender() {
        $(".category-list").empty();
        $(".product-list").empty();
        let tmpHtml = `<div class="category-item current-category">All</div>`
        this.category.forEach((element) => {
            tmpHtml += `<div class="category-item">` + element + `</div>`
        })
        $(".category-list").append(tmpHtml)
        this.products.forEach((element) => {
            $(".product-list").append(element.render())
        })
        gsap.fromTo($(".product-list"), { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
    renderProductList(category) {
        if (category == "All") {
            this.initrender();
        } else {
            $(".product-list").empty();
            $(".category-list").empty();
            let tmpData = this.products.filter(function (obj) {
                return obj.category == category;
            });

            let tmpHtml = `<div class="category-item">All</div>`
            this.category.forEach((element) => {
                if(element == category){
                    tmpHtml += `<div class="category-item current-category">` + element + `</div>`
                }else{
                    tmpHtml += `<div class="category-item">` + element + `</div>`
                }
            })
            $(".category-list").append(tmpHtml)
            tmpData.forEach((element) => {
                $(".product-list").append(element.render())
            })
            gsap.fromTo($(".product-list"), { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
    }
}
