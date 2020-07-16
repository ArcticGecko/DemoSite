import * as React from 'react';
export class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "add-button-container" },
            React.createElement("div", { className: `add-button ${this.props.Orientation}`, onClick: this.props.Callback },
                this.props.Orientation == "row" &&
                    React.createElement(React.Fragment, null, "Add Row"),
                this.props.Orientation == "column" &&
                    React.createElement(React.Fragment, null, "Add Col"))));
    }
}
//# sourceMappingURL=AddButton.js.map