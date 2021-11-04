import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/-services/productService.service';

import { category } from 'src/app/model/Category.model';
import { Filter } from 'src/app/model/filter.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productArr: Product[] = [];
  categoryList: category[];
  filterList: Filter[];
  // pagination
  @Input() numberOfItemsPerPage: number=9;
  numberOfPagesArr: number[] = [];
  slicedProductArr: Product[] = [];
  productToBeViewed: Product[] = [];
  currentBage: number = 0;
  newProductArr: Product[] = [];
  x: number = 5;
  // services

  constructor(private productService: ProductService) {
    this.productArr = productService.getAllProducts();
    this.categoryList = [
      { categoryName: "Arts & Crafts" },
      { categoryName: "Automotive" },
      { categoryName: "Baby" },
      { categoryName: "Books" },
      { categoryName: "Eletronics" },
      { categoryName: "Women's Fashion" },
      { categoryName: "Men's Fashion" },
      { categoryName: "Health & Household" },
      { categoryName: "Home & Kitchen" },
      { categoryName: "Military Accessories" },
      { categoryName: "Movies & Television" },
      { categoryName: "Sports & Outdoors" },
      { categoryName: "Tools & Home Improvement" },
      { categoryName: "Toys & Games" }
    ]
    this.filterList = [
      { filterName: "Nike" },
      { filterName: "Travel" },
      { filterName: "Sport" },
      { filterName: "Tv" },
      { filterName: "Books" },
      { filterName: "Tech" },
      { filterName: "Addidas" },
      { filterName: "Promo" },
      { filterName: "Reading" },
      { filterName: "Social" },
      { filterName: "New" },
      { filterName: "Specia" },
      { filterName: "Food" },
      { filterName: "Used" },
    ]

  }
  
  ngOnInit(): void {
    this.productService.productChanges.subscribe((res)=>{
      console.log(res)
    })
    this.sliceArray(this.productArr)
    const numOfPages = Math.ceil(this.slicedProductArr.length / this.numberOfItemsPerPage);
    for (let index = 0; index < numOfPages; index++) {
      this.numberOfPagesArr.push(index + 1);

    }
    console.log(this.numberOfPagesArr.length)
    console.log(this.productArr.length)
    console.log(this.slicedProductArr.length)
    this.productService.deletItem.subscribe(
      (next) => {
        //  console.log(this.productArr)
        //  console.log(next);
        //  this.newProductArr = this.productService.delete(next);
        //   this.sliceArray(this.newProductArr);
         this.productToBeViewed = this.productService.delete(next);
      }
    ) 
  }

  sliceArray(products:Product[]) {
    this.slicedProductArr = products.slice();
    this.productToBeViewed = this.slicedProductArr.slice(this.currentBage * this.numberOfItemsPerPage, (this.currentBage * this.numberOfItemsPerPage) + this.numberOfItemsPerPage);
  }
  onPagenation(i: number) {
    if (i > -1 && i < this.numberOfPagesArr.length) {
      console.log(i);
      this.currentBage = i;

    }
    this.sliceArray(this.productArr)
  }
   search(item: HTMLInputElement) {
    //console.log(item);
    // console.log(item.value);
  //  this.productToBeViewed = [];
  let newProductArr:Product[]=[]
    if (item.value == "") {
      this.sliceArray(this.productArr);
    }
    else {
      for (var i = 0; i < this.productArr.length; i++) {
        if (this.productArr[i].BasicData.name?.includes(item.value)) {
        // this.productToBeViewed.push(this.productArr[i]);
        newProductArr.push(this.productArr[i]);
        }
      }
      this.sliceArray(newProductArr)
    }
  }  

  searchAutoComplete(item: HTMLInputElement){
    if(item.value!=""){
      this.search(item);
    }
    
  }


}


