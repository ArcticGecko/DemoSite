import * as React from 'react';
export interface BoxProps {
    title?: string;
    src?: string;
}
export interface BoxState {
    id: string;
    color: string;
    svgContent: string;
}
export declare class Box extends React.Component<BoxProps, BoxState> {
    private containerRef;
    constructor(props: BoxProps);
    componentDidMount(): void;
    private getContent;
    private findGradientColor;
    render(): JSX.Element;
}
