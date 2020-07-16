export class Color {

    public hex: string;

    public r: number;
    public g: number;
    public b: number;

    constructor() {

    }

    public setFromHexString(hexString: string): void {
        const hexCharToNum: (c: string) => number = (c: string) => {
            switch (c.toLowerCase()) {
                case '0':
                    return 0;
                case '1':
                    return 1;
                case '2':
                    return 2;
                case '3':
                    return 3;
                case '4':
                    return 4;
                case '5':
                    return 5;
                case '6':
                    return 6;
                case '7':
                    return 7;
                case '8':
                    return 8;
                case '9':
                    return 9;
                case 'a':
                    return 10;
                case 'b':
                    return 11;
                case 'c':
                    return 12;
                case 'd':
                    return 13;
                case 'e':
                    return 14;
                case 'f':
                    return 15;
                default:
                    throw new Error("Invalid input string. Not a hex string.");
            }
        };

        let manipString: string = hexString;
        // If it starts with a # then trim it.
        if (manipString.charAt(0) == '#') {
            manipString = manipString.slice(1, manipString.length);
        }
        const stringLength: number = manipString.length;
        let rString: string, gString: string, bString: string;
        let r: number, g: number, b: number;
        switch (stringLength) {
            case 1:
                let stringVal: number = hexCharToNum(manipString);
                stringVal *= 17;
                r = stringVal, g = stringVal, b = stringVal;
                break;
            case 3:
                rString = manipString.slice(0, 1);
                r = hexCharToNum(rString);
                r *= 17;
                gString = manipString.slice(1, 2);
                g = hexCharToNum(gString);
                g *= 17;
                bString = manipString.slice(2, 3);
                b = hexCharToNum(bString);
                b *= 17;
                break;
            case 6:
                rString = manipString.slice(0, 2);
                r = (16 * hexCharToNum(rString.charAt(0))) + hexCharToNum(rString.charAt(1));
                gString = manipString.slice(2, 4);
                g = (16 * hexCharToNum(gString.charAt(0))) + hexCharToNum(gString.charAt(1));
                bString = manipString.slice(4, 6);
                b = (16 * hexCharToNum(bString.charAt(0))) + hexCharToNum(bString.charAt(1));
                break;
            default:
                throw new Error("Invalid input string. " + hexString);
        }
        this.r = r, this.g = g, this.b = b;
        this.setHexString();
    }

    public setFromRGB(r: number, g: number, b: number): void {
        this.r = r, this.g = g, this.b = b;
        this.setHexString();
    }

    private setHexString(): void {
        const intToHex: (i: number) => string = (i: number) => {
            let output: string = i.toString(16);
            if (output.length < 2) {
                output = '0' + output;
            }
            return output;
        }

        this.hex = '#' + intToHex(this.r) + intToHex(this.g) + intToHex(this.b);
    }

    public toString(): string {
        const output: string = `Hex: ${this.hex}, R: ${this.r}, G:${this.g}, B: ${this.b}`;
        return output;
    }
}