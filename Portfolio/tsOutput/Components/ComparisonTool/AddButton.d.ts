import * as React from 'react';
export interface AddButtonProps {
    Orientation: "row" | "column";
    Callback: () => void;
}
export declare class AddButton extends React.Component<AddButtonProps> {
    constructor(props: AddButtonProps);
    render(): JSX.Element;
}
