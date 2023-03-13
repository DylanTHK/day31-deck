// interface used to hold values
export interface Card {
    suit: string,
    num: number,
    val: number
}

export interface Hand {
    name: string,
    cards: Card[]
}

export const SUIT = ['clover', 'diamond', 'heart', 'spade'];
// 1-A, 11-J, 12-Q, 13-K
export const CARD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// create deck
export class Deck {
    private deck: Card[] = []
    
    
    // constructor(count = 1) {
        
        // }
        
    generateDeck() {
        for (let s of SUIT) {
            for (let i = 0; i < CARD.length; i++) {
                console.info("Suit: " + s);
                console.info("Card: " + CARD[i]);
                console.info("Value: " + VALUE[i]);
            }
    }
}

}



// shuffle method

// take method ( )

// canTake method (check if cards > 0)