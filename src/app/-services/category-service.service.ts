import { Injectable } from '@angular/core';
import { category } from '../model/Category.model';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  categoryList: category[];
  constructor() { 
    this.categoryList=[{ categoryName: "Arts & Crafts",id:14 },
    { categoryName: "Automotive",id:1 },
    { categoryName: "Baby",id:2 },
    { categoryName: "Books" ,id:3},
    { categoryName: "Eletronics",id:4 },
    { categoryName: "Women's Fashion",id:5 },
    { categoryName: "Men's Fashion" ,id:6},
    { categoryName: "Health & Household",id:7 },
    { categoryName: "Home & Kitchen" ,id:8},
    { categoryName: "Military Accessories",id:9 },
    { categoryName: "Movies & Television" ,id:10},
    { categoryName: "Sports & Outdoors" ,id:11},
    { categoryName: "Tools & Home Improvement",id:12 },
    { categoryName: "Toys & Games" ,id:13}];
  }

  getAllCategories():category[]{
    return [...this.categoryList];
  }
  getCategoryById(id:number):category | undefined{
    const cat=this.categoryList.find((c)=>c.id===id);
    return cat;
  }
}
