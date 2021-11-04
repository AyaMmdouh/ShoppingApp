import { BasicData } from "./BasicData.model";
import { category } from "./Category.model";
import { Filter } from "./filter.model";
import { Payment } from "./PaymentMethods.model";

export interface Product{
    id?:number,
    price:number,
    BasicData:BasicData;
    imgUrls:string[],
    discount?:number,
    tags:Filter[],
    category:category,
    paymentMethod?:Payment[],
    relatedProdutIds?:number[]
}