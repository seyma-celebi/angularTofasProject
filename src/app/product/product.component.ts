import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //providers: [AlertifyService]
  providers: [ProductService]

})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  title = "Ürün Listesi";
  filterText = ""; //filtrelemek istediğimiz parçacığı belirliyoruz tırnakların içine bir şeyler yazsaydık two way binding olduğu için arama kutucuğunda verilen değer görünürdü
  products: Product[];


  addToCard(product: Product) {
    //alert(product.name + " Sepete eklendi!")
    //alertify.success(product.name + " added!")
    this.cartService.addToCart(product);
    this.alertifyService.success(product.name + " added")
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
        //subscribe ı görene kadar işlemler devam ediyo. subscribe ı görünce işlemler durur.
      });
    })

  }
  //component ilk açıldığnda çalışır.
  //ngOnInit(), Angular bileşeninin ilk kez oluşturulduğu zaman çağrılır ve genellikle bileşenin başlangıç durumu için kullanılır.

}

