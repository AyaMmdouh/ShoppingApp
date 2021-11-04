import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/-services/productService.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
productsArray:Product[]=[];

  constructor(private productService:ProductService) {
    
  }
  
  ngOnInit(): void {
    this.productService.addedItems.subscribe(
      (next)=>{
        console.log(next);
        this.productsArray.push(next);
      }
    );
  }

}
