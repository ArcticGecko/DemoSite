import * as React from 'react';
export class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "popup" }, this.props.Content));
    }
}
//# sourceMappingURL=Popup.js.map