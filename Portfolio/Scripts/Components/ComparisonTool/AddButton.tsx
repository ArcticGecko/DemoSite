import * as React from 'react';

export interface AddButtonProps {
    Orientation: "row" | "column";
    Callback: () => void;
}

export class AddButton extends React.Component<AddButtonProps> {

    constructor(props: AddButtonProps) {
        super(props);
    }

    render() {

        return (
            <div className="add-button-container">
                <div className={`add-button ${this.props.Orientation}`} onClick={this.props.Callback}>
                    {this.props.Orientation == "row" &&
                    <React.Fragment>Add Row</React.Fragment>
                    }
                    {this.props.Orientation == "column" &&
                    <React.Fragment>Add Col</React.Fragment>
                    }
                </div>
            </div>
        );
    }

}