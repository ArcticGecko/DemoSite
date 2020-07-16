import * as React from 'react';

export interface BoxContainerProps {

}

export class BoxContainer extends React.Component<BoxContainerProps> {

    constructor(props: BoxContainerProps) {
        super(props);
    }

    render() {

        return (
            <div className="display-box-container">
                {this.props.children}
            </div>
        );
    }

}