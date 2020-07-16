import * as React from 'react';
export interface BoxDisplayProps {
    position: "top" | "middle" | "bottom";
}
export declare class BoxDisplay extends React.Component<BoxDisplayProps> {
    constructor(props: BoxDisplayProps);
    render(): JSX.Element;
}
