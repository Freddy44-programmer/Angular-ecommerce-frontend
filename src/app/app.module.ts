import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
{path: 'cart-details', component: CartDetailsComponent},
 {path: 'products/:id', component: ProductDetailsComponent},
 {path: 'search/:keyword', component: ProductsListComponent},
 {path: 'category/:id', component: ProductsListComponent},
 {path: 'category', component: ProductsListComponent},
 {path: 'products', component: ProductsListComponent},
 {path: '', redirectTo: '/products' , pathMatch: 'full'},
 {path: '**', redirectTo: '/products' , pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    DropdownComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
