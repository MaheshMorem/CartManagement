import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartListService]
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartListService) { }
  cartList: any;
  price: number = 0;
  ngOnInit(): void {
    let data: any = localStorage.getItem('cartList');
    this.cartList = JSON.parse(data);
    console.log(this.cartList)
    this.cartList.forEach((element: any) => {
      this.price += Number(element.price);
    });
    console.log(this.cartList.length)
  }

}
