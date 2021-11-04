import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryService } from 'src/app/-services/category-service.service';
import { PaymentService } from 'src/app/-services/payment-service.service';
import { ProductService } from 'src/app/-services/productService.service';
import { category } from 'src/app/model/Category.model';
import { Filter } from 'src/app/model/filter.model';
import { Payment } from 'src/app/model/PaymentMethods.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categoryList: category[];
  paymentWays: Payment[];
  product = <Product>{};
  isEditMood=false;
  constructor(private categoryService: categoryService, private paymentService: PaymentService,private productService:ProductService,
    private router:Router,
    private activatedRouter:ActivatedRoute) {
    this.categoryList = this.categoryService.getAllCategories();
    this.paymentWays = this.paymentService.getAllMethods();
    this.product={
       price: .0, paymentMethod: [{  name: "" }], category: {  categoryName: "" }, tags: [], BasicData: {
          name: "",
          language: { name: "" }, desc: ""
      }, imgUrls: ["assets/img/device.png"]
  }
    // this.product.tags = [];
   // this.product.paymentMethod = []
  }
  onSubmit(form: NgForm) {
    // assign category
    let cat: category | undefined = this.categoryService.getCategoryById(parseInt(form.value.category));
    if (true && cat) this.product.category = cat;

    // assign basic data

    this.product.price = form.value.price;
    this.product.BasicData = {
      name: form.value.name,
      language: { name: "english" },
      desc: form.value.desc,
    }

    this.product.discount = form.value.discount;
    this.product?.tags ? [0] ? form.value.tag : undefined :
    this.product.imgUrls = ["assets/img/device.png"];

    // handling payment method
    for (let i = 0; i < this.paymentWays.length; i++) {
      if (form.value['check_' + i]) {
        this.product.paymentMethod?.push(this.paymentWays[i]);
      }
    }

    if(this.isEditMood){
      this.productService.update(this.product);
    }else{
      this.productService.addNewProduct(this.product);
    }
    this.router.navigateByUrl('home')
    console.log(this.product);
    console.log(form);
  }


  onTagChanged(tagInput: HTMLInputElement) {
    this.product.tags.push({ filterName: tagInput.value })
    tagInput.value = "";
  }
  ngOnInit(): void {
   const id= this.activatedRouter.snapshot.params.id;
   const product= this.productService.getProductById(parseInt(id));
   console.log(product);
   console.log(this.isEditMood)
   if(product){
     this.product={...product};
     this.isEditMood=true;
   }
  }

}
