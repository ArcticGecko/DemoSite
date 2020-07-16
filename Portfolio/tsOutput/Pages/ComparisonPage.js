import * as React from 'react';
import { ComparisonTool } from '../Components';
export class ComparisonPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("p", null,
                "Click on a cell to edit it. ",
                React.createElement("br", null),
                "Press enter to commit the value. ",
                React.createElement("br", null),
                "Escape to cancel the edit. ",
                React.createElement("br", null)),
            React.createElement("div", { className: "comparison-tool-container" },
                React.createElement(ComparisonTool, Object.assign({}, this.props)))));
    }
}
//# sourceMappingURL=ComparisonPage.js.map