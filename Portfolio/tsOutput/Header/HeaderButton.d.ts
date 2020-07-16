import * as React from 'react';
export interface HeaderButtonProps {
    text: string;
    href: string;
    isActive: boolean;
}
export interface HeaderButtonState {
    id: string;
    color: string;
}
export declare class HeaderButton extends React.Component<HeaderButtonProps, HeaderButtonState> {
    private containerRef;
    constructor(props: HeaderButtonProps);
    componentDidMount(): void;
    private findGradientColor;
    private onClickHandler;
    render(): JSX.Element;
}
