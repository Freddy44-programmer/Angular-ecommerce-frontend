import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from  'rxjs'
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private baseUrl = 'http://localhost:8080/api/products';
 
  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{

    // build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(reponse => reponse._embedded.products)
    );
  }
  getProductCategories(): Observable<ProductCategory[]>{

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(reponse => reponse._embedded.productCategory)
    );
  }
}

interface GetResponseProducts{
  // unwraps the JSON from Spring Data Rest _embedded entry
  _embedded: {
       products: Product[];
  }
}


interface GetResponseProductCategory{
  // unwraps the JSON from Spring Data Rest _embedded entry
  _embedded: {
       productCategory: ProductCategory[];
  }
}
