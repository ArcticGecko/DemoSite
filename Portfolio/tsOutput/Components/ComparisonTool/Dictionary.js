export class Dictionary {
    constructor() {
        this._content = [];
    }
    get length() {
        return this._content.length;
    }
    add(key, value) {
        if (this._content.filter(c => c.Key == key).length == 0) {
            const kvp = { Key: key, Value: value };
            this._content.push(kvp);
        }
        else {
            throw new Error(`The key:${key} already exists.`);
        }
    }
    remove(key) {
        const searchElement = this._content.filter(c => c.Key == key)[0];
        const index = this._content.indexOf(searchElement);
        if (index != null) {
            this._content.splice(index, 1);
        }
    }
    get(key) {
        const rows = this._content.filter(c => c.Key == key);
        if (rows.length > 0) {
            return rows[0].Value;
        }
        else {
            return null;
        }
    }
    set(key, value) {
        const rows = this._content.filter(c => c.Key == key);
        if (rows.length > 0) {
            rows[0].Value = value;
        }
        else {
            this.add(key, value);
        }
    }
    forEach(func) {
        for (let i = 0; i < this._content.length; i++) {
            func(this._content[i].Key, this._content[i].Value);
        }
    }
    map(func) {
        const output = [];
        for (let i = 0; i < this._content.length; i++) {
            output.push(func(this._content[i].Key, this._content[i].Value));
        }
        return output;
    }
    init(input) {
        this._content = input._content;
    }
}
//# sourceMappingURL=Dictionary.js.map