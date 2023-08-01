import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  path = "http://localhost:3000/cart";
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  // getItems(categoryId): Observable<Product[]> {
    
  //   let newPath = this.path;
  //   if (categoryId) {
  //     newPath = newPath + "?cart=" + categoryId;
  //   }

  //   return this.http
  //     .get<Product[]>(newPath).pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  
  // }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage= ''
    if(err.error instanceof ErrorEvent){
      errorMessage= 'Bir hata olustu'+ err.error.message
    }else{
      errorMessage= 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }


}
