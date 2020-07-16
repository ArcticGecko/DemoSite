import * as React from 'react';
export class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "display-box-container" }, this.props.children));
    }
}
//# sourceMappingURL=BoxContainer.js.map