export default class Draggable {
    constructor (item) {
        this.item = item;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.item.subscribe('mousedown', this.onMouseDown);
    }

    onMouseDown(e) {
        this.start = e;

        const oldTransform= this.item.element.style.transform.replace(/[(px,)]/g, ' ').split(/\s+/g)
        this.oldX = +oldTransform[1]
        this.oldY = +oldTransform[2]

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove(e) {
        this.item.setPosition(
            this.oldX ? this.oldX + e.clientX - this.start.clientX : e.clientX - this.start.clientX,
            this.oldY ? this.oldY + e.clientY - this.start.clientY : e.clientY - this.start.clientY
        );
    }

    onMouseUp () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}