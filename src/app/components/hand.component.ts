import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {
  
  @Input()
  hand!: Hand

  @Output()
  dropCard = new Subject<RemoveCard>();
  
  // method to drop card with name and index
  drop(index: number) {
    console.info(">>> Dropping card at:", this.hand.name, index);
    let dropName: string = this.hand.name;
    let cardIdx = index;
    this.dropCard.next({
      name: dropName,
      cardIndex: cardIdx
    })
  }
}
