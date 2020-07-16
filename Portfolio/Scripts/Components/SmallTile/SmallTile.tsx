import * as React from 'react';

export interface SmallTileProps {
    text: string;
}

export class SmallTile extends React.Component<SmallTileProps> {

    constructor(props: SmallTileProps) {
        super(props);
    }

    render() {

        return (
            <div className="small-tile">
                {this.props.text}
            </div>
        );
    }

}