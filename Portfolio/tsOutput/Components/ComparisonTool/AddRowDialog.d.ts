import * as React from 'react';
export interface AddRowDialogProps {
    SubmitCallback: (name: string, type: "String" | "Numeric") => Promise<void>;
    CloseCallback: () => void;
}
export interface AddRowDialogState {
    Value: string;
    Type: "String" | "Numeric";
}
export declare class AddRowDialog extends React.Component<AddRowDialogProps, AddRowDialogState> {
    constructor(props: AddRowDialogProps);
    private handleAddClick;
    private handleInput;
    private handleSelect;
    render(): JSX.Element;
}
