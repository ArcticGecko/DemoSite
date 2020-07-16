export class PositionTools {
    static findHorizontalPosition(el) {
        const bounds = el.getBoundingClientRect();
        const horizontalStart = bounds.left;
        const width = bounds.width;
        const horizontalPos = horizontalStart + (width / 2);
        return horizontalPos;
    }
    static findHorizontalPositionRelativeToWindow(el) {
        const horizontalPos = this.findHorizontalPosition(el);
        const windowWidth = window.innerWidth;
        const pos = horizontalPos / windowWidth;
        return pos;
    }
}
//# sourceMappingURL=PositionTools.js.map