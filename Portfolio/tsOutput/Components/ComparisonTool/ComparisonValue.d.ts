import * as React from 'react';
export interface ComparisonValueProps {
    RowKey: number;
    ItemKey: number;
    Value: string;
    EditCallback: (itemId: number, rowId: number, value: string) => Promise<void>;
}
export interface ComparisonValueState {
    IsEditing: boolean;
    EditingValue?: string;
}
export declare class ComparisonValue extends React.Component<ComparisonValueProps, ComparisonValueState> {
    private inputElement;
    constructor(props: ComparisonValueProps);
    private startEditing;
    private editingStarted;
    private submitEdit;
    private endEdit;
    private handleTextInput;
    private handleInputKeyPress;
    private handleDocKeyPress;
    render(): JSX.Element;
}
