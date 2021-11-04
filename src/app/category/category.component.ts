import { Component, Input, OnInit } from '@angular/core';
import { category } from '../model/Category.model';
import { Filter } from '../model/filter.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
@Input() category!:category;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
