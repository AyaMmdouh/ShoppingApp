import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/-services/productService.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!:Product;
  
 // @ViewChild('inputText') input!:ElementRef;
  constructor(private productService:ProductService) { 
    // this.product = {
    //  name: "Camera",
    //  price: 290,
    // discount: 10,
    // imgUrl: "assets/img/device.png"
    //  }
  }
  
  getPrice(){
    return this.product.discount?this.product.price-this.product.discount : this.product.price;
   }
   AddedToCart(){
    // alert(`item ${this.product.name} added to cart`);
     //console.log(this.input)
    // this.input.nativeElement.value=this.product.price.toString();
    // const casteInput =this.input.nativeElement as HTMLInputElement;
     //console.log(casteInput)
     console.log(this.product);
     this.productService.addedItems.emit(this.product);

   }
   deletThisProduct(){
    this.productService.deletItem.emit(this.product);
   }
  ngOnInit(): void {
  }

}
