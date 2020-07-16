export class KeyUtilities {

    private static keys: string[];

    public static getKey(): string {
        if (this.keys == null) {
            this.keys = [];
        }
        let outputString: string = "id";
        for (var i = 0; i < 6; i++) {
            outputString += this.getRand();
        }
        if (this.keys.find(k => k == outputString)) {
            return this.getKey();
        } else {
            this.keys.push(outputString);
            return outputString;
        }
    }

    private static getRand(): number {
        return parseInt((Math.random() * 10).toString());
    }
}