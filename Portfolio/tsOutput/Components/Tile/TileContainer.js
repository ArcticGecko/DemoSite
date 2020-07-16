import * as React from 'react';
export class TileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "tile-container" }, React.Children.map(this.props.children, child => (React.createElement(React.Fragment, null, child)))));
    }
}
//# sourceMappingURL=TileContainer.js.map