export declare class Color {
    hex: string;
    r: number;
    g: number;
    b: number;
    constructor();
    setFromHexString(hexString: string): void;
    setFromRGB(r: number, g: number, b: number): void;
    private setHexString;
    toString(): string;
}
