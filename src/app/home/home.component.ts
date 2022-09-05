import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';
import data from './data.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CartListService]
})
export class HomeComponent implements OnInit {
  constructor(private cartService: CartListService){}
  moviesList: any  = data;
  ngOnInit(): void {

  }
  addToCartList(i: number){
    this.cartService.addToCart(i);
  }
}
