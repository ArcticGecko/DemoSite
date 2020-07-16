export class KeyUtilities {
    static getKey() {
        if (this.keys == null) {
            this.keys = [];
        }
        let outputString = "id";
        for (var i = 0; i < 6; i++) {
            outputString += this.getRand();
        }
        if (this.keys.find(k => k == outputString)) {
            return this.getKey();
        }
        else {
            this.keys.push(outputString);
            return outputString;
        }
    }
    static getRand() {
        return parseInt((Math.random() * 10).toString());
    }
}
//# sourceMappingURL=KeyUtilities.js.map