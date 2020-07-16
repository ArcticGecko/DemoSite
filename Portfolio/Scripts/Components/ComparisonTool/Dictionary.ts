import {KeyboardTab} from "@material-ui/icons";

export interface KeyValuePair<TK, TV> {
    Key: TK;
    Value: TV;
}

export class Dictionary<TK, TV> {

    private _content: Array<KeyValuePair<TK, TV>>;

    constructor() {
        this._content = [];
    }

    public get length(): number {
        return this._content.length;
    }

    public add(key: TK, value: TV): void {
        // If the key is not already in the dictionary.
        if (this._content.filter(c => c.Key == key).length == 0) {
            const kvp: KeyValuePair<TK, TV> = {Key: key, Value: value};
            this._content.push(kvp);
        } else {
            throw new Error(`The key:${key} already exists.`);
        }
    }

    public remove(key: TK): void {
        const searchElement: KeyValuePair<TK, TV> = this._content.filter(c => c.Key == key)[0];
        const index: number = this._content.indexOf(searchElement);
        if (index != null) {
            this._content.splice(index, 1);
        }
    }

    public get(key: TK): TV {
        const rows = this._content.filter(c => c.Key == key);
        if (rows.length > 0) {
            return rows[0].Value;
        } else {
            return null;
        }
    }

    public set(key: TK, value: TV): void {
        const rows = this._content.filter(c => c.Key == key);
        if (rows.length > 0) {
            rows[0].Value = value;
        } else {
            this.add(key, value);
        }
    }

    public forEach(func: (key: TK, value: TV) => void): void {
        for (let i = 0; i < this._content.length; i++) {
            func(this._content[i].Key, this._content[i].Value);
        }
    }

    public map(func: (key: TK, value: TV) => React.ReactNode): React.ReactNode[] {
        const output: React.ReactNode[] = [];
        for (let i = 0; i < this._content.length; i++) {
            output.push(func(this._content[i].Key, this._content[i].Value));
        }
        return output;
    }

    public init(input: { _content: Array<KeyValuePair<TK, TV>> }) {
        this._content = input._content;  
    }

}