import * as React from 'react';
export interface DisplayTileProps {
    src: string;
    href: string;
}
export declare class DisplayTile extends React.Component<DisplayTileProps> {
    constructor(props: DisplayTileProps);
    render(): JSX.Element;
}
