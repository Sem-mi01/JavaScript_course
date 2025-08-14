// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

const cardSuits = ['spade', 'diamond','heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const cardSuit of cardSuits ) {
    for (const value of values) {
        const card = {cardSuit: cardSuit, value: value };
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
// console.log(cards);



const reduse = cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
        case 'spade':
            accumulator.spades.push(card);
            break;
    }
    return accumulator;
    }, {
    diamonds: [],
    hearts: [],
    spades: [],
    clubs: [],
});
console.log(reduse);
