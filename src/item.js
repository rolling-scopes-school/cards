export default class Item {
    constructor (tagName) {
        this.element = document.createElement(tagName);
        this.curentAxisX = 0
        this.curentAxisY = 0
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

    setAxis() {
        if (this.previousY && this.previousY) {
            this.curentAxisX = this.previousX
            this.curentAxisY = this.previousY
        }
    }

    setPosition(x, y) {
        this.previousX = x
        this.previousY = y
        this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
}
