import * as React from 'react';
export interface FooterButtonProps {
    src: string;
    href?: string;
}
export interface FooterButtonState {
    id: string;
    color: string;
    svgContent: string;
}
export declare class FooterButton extends React.Component<FooterButtonProps, FooterButtonState> {
    private containerRef;
    constructor(props: FooterButtonProps);
    componentDidMount(): void;
    private getContent;
    private findGradientColor;
    render(): JSX.Element;
}
