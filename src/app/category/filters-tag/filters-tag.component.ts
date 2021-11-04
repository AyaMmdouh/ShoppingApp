import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/model/filter.model';

@Component({
  selector: 'app-filters-tag',
  templateUrl: './filters-tag.component.html',
  styleUrls: ['./filters-tag.component.scss']
})
export class FiltersTagComponent implements OnInit {
  @Input() filter!:Filter;
  constructor() { }

  ngOnInit(): void {
  }

}
