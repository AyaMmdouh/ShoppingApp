import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/products/home/home.component';
import { ProductDetailsComponent } from './core/products/product-details/product-details.component';
import { AddProductComponent } from './shared/add-product/add-product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: " ", redirectTo: "home", pathMatch: "full" },
  { path: "product", loadChildren: () => import('./core/products/product.module').then(m => m.ProductModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadingStrategy,scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
