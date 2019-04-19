export default class Draggable {
    constructor (item) {
        this.item = item;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.item.subscribe('mousedown', this.onMouseDown);
    }

    onMouseDown(e) {
        if (!this.start) {
            this.start = e;
        }

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove({ clientX, clientY }) {
        this.item.setPosition(
            clientX - this.start.clientX,
            clientY - this.start.clientY,
        );
    }

    onMouseUp (e) {
        this.start = e;

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}