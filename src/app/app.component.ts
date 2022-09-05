import { Component } from '@angular/core';
import data from '../app/home/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartManager';
  
  ngOnInit(){
    localStorage.setItem('moviesList', JSON.stringify(data));
  }
}
