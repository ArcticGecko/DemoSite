import * as React from 'react';
export interface SwitchProps {
    onSwitch: (switchState: boolean) => void;
    initialState: boolean;
}
export interface SwitchState {
    switch: boolean;
}
export declare class Switch extends React.Component<SwitchProps, SwitchState> {
    constructor(props: SwitchProps);
    private onChange;
    render(): JSX.Element;
}
