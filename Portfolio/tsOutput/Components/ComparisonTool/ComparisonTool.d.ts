import * as React from 'react';
import { Dictionary } from "./";
export interface ComparisonRow {
    Name: string;
    ValueType: "String" | "Numeric";
}
export interface ComparisonToolProps {
    Rows: object;
    Items: object;
}
export interface ComparisonToolState {
    Rows: Dictionary<number, ComparisonRow>;
    Items: Dictionary<number, Dictionary<number, string>>;
    AddRowDialog?: React.ReactNode;
    ErrorMessage?: string;
}
export declare class ComparisonTool extends React.Component<ComparisonToolProps, ComparisonToolState> {
    constructor(props: ComparisonToolProps);
    private static getTypeFromNumber;
    private addRow;
    private addRowCallback;
    private closeRowCallback;
    private removeRow;
    private addItem;
    private removeItem;
    private setValue;
    private clearSession;
    private handleClearButtonClick;
    private getRow;
    private getCell;
    render(): JSX.Element;
}
