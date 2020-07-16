import * as React from 'react';
export interface HighlightCharProps {
}
export interface HighlightCharState {
    id: string;
    color: string;
}
export declare class HighlightChar extends React.Component<HighlightCharProps, HighlightCharState> {
    private containerRef;
    constructor(props: HighlightCharProps);
    componentDidMount(): void;
    private findGradientColor;
    render(): JSX.Element;
}
