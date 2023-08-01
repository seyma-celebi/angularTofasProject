import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  removeItems = this.cartService.clearCart();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.getItems().subscribe(data=>{
    //   this.items = data
    //   });
  }


  removeToCard(items: Product) {
    //alert(product.name + " Sepete eklendi!")
    //alertify.success(product.name + " added!")
    this.cartService.clearCart();
  }

}
