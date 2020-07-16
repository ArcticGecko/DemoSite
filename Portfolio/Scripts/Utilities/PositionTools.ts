import * as React from 'react';

export class PositionTools {

    public static findHorizontalPosition(el: HTMLElement): number {
        const bounds: DOMRect | ClientRect = el.getBoundingClientRect();
        const horizontalStart: number = bounds.left;
        const width: number = bounds.width;
        const horizontalPos: number = horizontalStart + (width / 2);
        return horizontalPos;
    }


    public static findHorizontalPositionRelativeToWindow(el: HTMLElement): number {
        const horizontalPos: number = this.findHorizontalPosition(el);
        const windowWidth: number = window.innerWidth;
        const pos = horizontalPos / windowWidth;
        return pos;
    }
}