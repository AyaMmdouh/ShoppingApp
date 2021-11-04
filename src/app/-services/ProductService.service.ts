import { EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
export class ProductService {
    private productList: Product[] = [];
   public addedItems = new EventEmitter<Product>();
   public deletItem = new EventEmitter<Product>();
   public productChanges=new EventEmitter<Product[]>();

    constructor() {
        this.productList = [
            {
                id: 1, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Labtop",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[9,17,3]
            },
            {
                id: 2, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "TV",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[1,10,3,9,11]
            },
            {
                id: 3, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }],
                BasicData: {
                    id: 1, name: "Mobile",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[1,2,9,7]
            },
            {
                id: 4, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Iphone",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[20,8,6]
            },
            {
                id: 5, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[13,16,11,6]
            },
            {
                id: 6, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[12,3,20,9]
            },
            {
                id: 7, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Mobile",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[2,5,11,5]
            },
            {
                id: 8, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Phone",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"],relatedProdutIds:[12,13,2,8]
            },
            {
                id: 9, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 10, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "TV",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 11, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 12, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 13, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Mobile",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 14, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Ipad",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 15, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "TV",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 16, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Iphone",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 17, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Camera",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 18, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData:{
                    id: 1, name: "TV",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 19, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Phone",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
            {
                id: 20, price: 2000, discount: 20, paymentMethod: [{ id: 1, name: "Visa" }], category: { id: 1, categoryName: "Electronics" }, tags: [{ id: 1, filterName: "tag1" }], BasicData: {
                    id: 1, name: "Labtop",
                    language: { id: 1, name: "English" }, desc: "This is a camera"
                }, imgUrls: ["assets/img/device.png"]
            },
        ]
    }
    getAllProducts(): Product[] {
        this.productChanges.emit([...this.productList]);
        return this.productList.slice();
    }
    getProductById(id: number): Product | undefined {
        return this.productList.find((product) => product.id === id);
    }
    update(product: Product): Product[] | undefined {
        this.productChanges.emit([...this.productList]);
        const index = this.productList.findIndex((p) => p.id === product.id);
        this.productList[index] = product;
        return [...this.productList]
    }
    delete(product: Product) {
        const index = this.productList.findIndex((p) => p.id === product.id);
        this.productList.splice(index, 1);
        return [...this.productList]
    }
    addNewProduct(product: Product): Product[] {
        this.productList.push(product);
        this.productChanges.emit([...this.productList]);
        return [...this.productList]
    }
}