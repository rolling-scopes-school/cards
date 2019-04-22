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
        this.item.setPreviousPosition()
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove(e) {
        this.item.setPosition(
            this.item.previousX ? this.item.previousX + e.clientX - this.start.clientX : e.clientX - this.start.clientX,
            this.item.previousY ? this.item.previousY + e.clientY - this.start.clientY : e.clientY - this.start.clientY
        );
    }

    onMouseUp () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}