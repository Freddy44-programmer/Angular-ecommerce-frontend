import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './componets/products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
 {path: 'category/:id', component: ProductsListComponent},
 {path: 'category', component: ProductsListComponent},
 {path: 'products', component: ProductsListComponent},
 {path: '', redirectTo: '/products' , pathMatch: 'full'},
 {path: '**', redirectTo: '/products' , pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    DropdownComponent
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
