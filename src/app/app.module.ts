import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { CategoryComponent } from './category/category.component';
import { FiltersTagComponent } from './category/filters-tag/filters-tag.component';
import { DropdownListComponent } from './shared/dropdown-list/dropdown-list.component';
import { ProductService } from './-services/productService.service';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './core/products/product.module';
import { HomeComponent } from './core/products/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownListComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
