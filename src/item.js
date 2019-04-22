export default class Item {
    constructor (tagName) {
        this.element = document.createElement(tagName);
        this.previousX = 0
        this.previousY = 0
        this._subs = [];
    }

    mount(parent = document.body) {
        parent.appendChild(this.element);
    }

    subscribe(event, fn) {
        this._subs.push(fn);
        this.element.addEventListener(event, fn);
    }

    unsubscribe(event, fn) {
        //todo: remove from subs list
        this.element.removeEventListener(event, fn);
    }

    setPreviousPosition() {
        const oldTransform= this.element.style.transform.replace(/[(px,)]/g, ' ').split(/\s+/g)
        this.previousX = +oldTransform[1]
        this.previousY = +oldTransform[2]
    }

    setPosition(x, y) {
        this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
}
