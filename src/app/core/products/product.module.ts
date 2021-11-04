import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductService } from "src/app/-services/productService.service";
import { CategoryComponent } from "src/app/category/category.component";
import { FiltersTagComponent } from "src/app/category/filters-tag/filters-tag.component";
import { AddProductComponent } from "src/app/shared/add-product/add-product.component";
import { DropdownListComponent } from "src/app/shared/dropdown-list/dropdown-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListingComponent } from "./product-listing/product-listing.component";

@NgModule({
    declarations: [
        ProductListingComponent,
        ProductDetailsComponent,
        ProductItemComponent,
        AddProductComponent,
        CategoryComponent,
        FiltersTagComponent
    ],
    imports: [RouterModule.forChild(
        [
            { path: "", children: [
                    { path: "listing", component: ProductListingComponent },
                    { path: "add", component: AddProductComponent },
                    { path: "details/:id", component: ProductDetailsComponent, data: { pageName: "Details" } },
                    { path: "edit/:id", component: AddProductComponent }]}
        ]),
        FormsModule,
        CommonModule],
    exports: []
})
export class ProductModule {

}