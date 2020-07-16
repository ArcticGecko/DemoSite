import * as React from 'react';
export interface PopupProps {
    Content: React.ReactNode;
}
export declare class Popup extends React.Component<PopupProps> {
    constructor(props: PopupProps);
    render(): JSX.Element;
}
