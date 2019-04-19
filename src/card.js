import Item from './item.js';

export default class Card extends Item {
    constructor (content) {
        super('div');

        this.content = content;

        this.element.classList.add('card');
        this.element.innerText = content;
    }
}