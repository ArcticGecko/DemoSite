import * as React from 'react';

export interface PopupProps {
    Content: React.ReactNode
}

export class Popup extends React.Component<PopupProps> {

    constructor(props: PopupProps) {
        super(props);
    }

    render() {

        return (
            <div className="popup">
                {this.props.Content}
            </div>
        );
    }

}