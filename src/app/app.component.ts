import { Component } from '@angular/core';
import { Card } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day 31 - Deck of Cards';

  random() {
    console.info("hello");
  }

  
  
}
