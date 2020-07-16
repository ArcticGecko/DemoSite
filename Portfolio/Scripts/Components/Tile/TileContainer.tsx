import * as React from 'react';

export interface TileContainerProps {

}

export class TileContainer extends React.Component<TileContainerProps> {
    constructor(props: TileContainerProps) {
        super(props);
    }

    render() {
        return (
            <div className="tile-container">
                {/*<div className="tile-filler"/>*/}
                {React.Children.map(this.props.children, child => (
                    <React.Fragment>
                        {child}
                        {/*<div className="tile-filler"/>*/}
                    </React.Fragment>
                )
                )}
            </div>
        );
    }
}