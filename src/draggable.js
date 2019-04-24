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
        this.item.setAxis()
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove(e) {
        this.item.setPosition(
            this.item.curentAxisX + e.clientX - this.start.clientX,
            this.item.curentAxisY + e.clientY - this.start.clientY
        );
    }

    onMouseUp () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}