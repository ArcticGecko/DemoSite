import {Color} from './index';

export class ColorUtilities {

    public static getPositionOnGradient(firstColor: Color, lastColor: Color, pos: number): Color {
        let r: number, g: number, b: number;
        r = ColorUtilities.FindPos(firstColor.r, lastColor.r, pos);
        g = ColorUtilities.FindPos(firstColor.g, lastColor.g, pos);
        b = ColorUtilities.FindPos(firstColor.b, lastColor.b, pos);
        const output: Color = new Color();
        output.setFromRGB(parseInt(r.toString()), parseInt(g.toString()), parseInt(b.toString()));
        return output;
    }
    
    private static FindPos(startPos: number, endPos: number, pos: number): number {
        const diff: number = startPos - endPos;
        const positionedDiff: number = diff * pos;
        const finalPos: number = startPos - positionedDiff;
        return finalPos;
    }
}