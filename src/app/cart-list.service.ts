import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from './home/data.json'

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  moviesList: any [] = data; 
  
  allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  

  constructor() { }

  getCartMovies(){
    
  }
  addToCart(i: number){
    let session: any;
    let temp: any [] = [];
    let data : any = localStorage.getItem('cartList');
    session = JSON.parse(data);
    if(session!= null){
      temp = session;
      temp.push(this.moviesList[i]);
      localStorage.setItem('cartList', JSON.stringify(temp));
    }else{
      temp.push(this.moviesList[i]);
      localStorage.setItem('cartList', JSON.stringify(temp));
    }
 }
}
