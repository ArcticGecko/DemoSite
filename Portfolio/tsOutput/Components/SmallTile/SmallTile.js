import * as React from 'react';
export class SmallTile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "small-tile" }, this.props.text));
    }
}
//# sourceMappingURL=SmallTile.js.map