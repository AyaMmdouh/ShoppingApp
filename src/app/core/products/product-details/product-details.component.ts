import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/-services/productService.service';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product!:Product;
realatedproductArr:Product[]=[];
  constructor(private activitedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    console.log(this.activitedRoute.snapshot.data.pageName)
  this.activitedRoute.params.subscribe((res)=>{
    const product=this.productService.getProductById(parseInt(res.id));
  if(!product){
    alert("error !")
  }else{
    this.product=product;
    this.realatedproductArr=[];
    this.product.relatedProdutIds?.map((productId)=>{
      const product=this.productService.getProductById(productId);
      product && this.realatedproductArr.push(product);
    })
  }
  })
  
  }

}
