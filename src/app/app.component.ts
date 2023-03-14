import { Component, OnInit } from '@angular/core';
import { Card, Deck, Hand, RemoveCard } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Day 31 - Deck of Cards';

  PLAYERS = [ 'fred', 'barney', 'wilma', 'betty' ]

  deck!: Deck

  hands: Hand[] = []

  ngOnInit(): void {
    // initialise deck
    this.deck = new Deck();
    this.deck.shuffle();

    // deal cards (add cards to hands)
    for (let p of this.PLAYERS) {
      if(this.deck.canTake()) {
        this.hands.push({
          name: p,
          cards: this.deck.take(3)
        })
      }
    }
    console.info(">>> Deck created: ", this.deck)
    console.info(">>> Hands created: ", this.hands)
  }

  removeCard(e: RemoveCard) {
    console.info(">>> removing card:", e)
    // find hand from hands
    const hand =  this.hands.find((h) => h.name === e.name)
    console.info(">>> found hand:", hand)
    hand?.cards.splice(e.cardIndex, 1)
  }

}
