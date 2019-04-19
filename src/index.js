import Card from './card.js';
import Draggable from './draggable.js';

document.addEventListener('DOMContentLoaded', initialize);

function initialize () {
    const root = document.querySelector('.root');

    const card = new Card('lorem ipsum');
    const draggable = new Draggable(card);

    card.mount(root);
}


