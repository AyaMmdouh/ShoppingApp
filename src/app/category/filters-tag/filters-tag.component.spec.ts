import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersTagComponent } from './filters-tag.component';

describe('FiltersTagComponent', () => {
  let component: FiltersTagComponent;
  let fixture: ComponentFixture<FiltersTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
