// 1-A, 11-J, 12-Q, 13-K
export const VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
export const SUIT = ['clover', 'diamond', 'heart', 'spade'];

// interface used to hold values
export interface Card {
    suit: string,
    num: number,
    val: number
}

export interface RemoveCard {
    name: string
    cardIndex: number
}

export interface Hand {
    name: string,
    cards: Card[]
}

// create deck
export class Deck {
    private deck: Card[] = []
    
    constructor() {
        for (let s of SUIT) {
            for (let i = 0; i < VALUE.length; i++) {
                let card: Card = {
                    suit: s,
                    num: i + 1,
                    val: VALUE[i]
                };
                this.deck.push(card);
            }
        }
    }
    // shuffle method
    shuffle() {
        const deckSize = this.deck.length;
        for (let i = 0; i < deckSize; i++) {
            let idx = Math.floor(Math.random() * deckSize);
            let temp = this.deck[idx];
            this.deck[idx] = this.deck[i];
            this.deck[i] = temp
        }
    }

    // take number of cards (default = 1)
    take(count=1): Card[] {
        return this.deck.splice(0, count)
    }

    // canTake method (check if cards > 0)
    canTake(): boolean {
        return this.deck.length > 0;
    }

    // dump method?
}

