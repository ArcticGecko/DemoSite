import * as React from 'react';
export class BoxDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const classes = `display-box ${this.props.position} center-horizontal secondary-content-width`;
        const childCount = React.Children.count(this.props.children);
        return (React.createElement("div", { className: classes }, React.Children.map(this.props.children, (child, i) => React.createElement(React.Fragment, null,
            i == childCount - 1 &&
                React.createElement(React.Fragment, null, child),
            i != childCount - 1 &&
                React.createElement(React.Fragment, null,
                    child,
                    React.createElement("div", { className: "box-divider" }))))));
    }
}
//# sourceMappingURL=BoxDisplay.js.map