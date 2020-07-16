/// <reference types="react" />
export interface KeyValuePair<TK, TV> {
    Key: TK;
    Value: TV;
}
export declare class Dictionary<TK, TV> {
    private _content;
    constructor();
    get length(): number;
    add(key: TK, value: TV): void;
    remove(key: TK): void;
    get(key: TK): TV;
    set(key: TK, value: TV): void;
    forEach(func: (key: TK, value: TV) => void): void;
    map(func: (key: TK, value: TV) => React.ReactNode): React.ReactNode[];
    init(input: {
        _content: Array<KeyValuePair<TK, TV>>;
    }): void;
}
