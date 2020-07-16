import { Color } from './index';
export class ColorUtilities {
    static getPositionOnGradient(firstColor, lastColor, pos) {
        let r, g, b;
        r = ColorUtilities.FindPos(firstColor.r, lastColor.r, pos);
        g = ColorUtilities.FindPos(firstColor.g, lastColor.g, pos);
        b = ColorUtilities.FindPos(firstColor.b, lastColor.b, pos);
        const output = new Color();
        output.setFromRGB(parseInt(r.toString()), parseInt(g.toString()), parseInt(b.toString()));
        return output;
    }
    static FindPos(startPos, endPos, pos) {
        const diff = startPos - endPos;
        const positionedDiff = diff * pos;
        const finalPos = startPos - positionedDiff;
        return finalPos;
    }
}
//# sourceMappingURL=ColorUtilities.js.map