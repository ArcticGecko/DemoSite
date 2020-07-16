import * as React from 'react';
import { HeaderButton } from './';
import { HighlightTitle } from '../Components/HighlightTitle';
export class FixedHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "fixed-header-outer flex-row" },
            React.createElement("div", { className: "fixed-header-inner flex-row" },
                React.createElement("div", { className: "flex-filler" }),
                React.createElement("div", { className: "content-width flex-row" },
                    React.createElement(HighlightTitle, null, "Oliver"),
                    React.createElement("div", { className: "space-div" }),
                    React.createElement(HighlightTitle, null, "McMillan"),
                    React.createElement("div", { className: "flex-filler" }),
                    React.createElement(HeaderButton, { text: "Home", href: window.variables.indexRoot, isActive: window.location.pathname == window.variables.indexRoot }),
                    React.createElement(HeaderButton, { text: "Resume", href: window.variables.resumeRoot, isActive: window.location.pathname == window.variables.resumeRoot }),
                    React.createElement(HeaderButton, { text: "Comparison Demo", href: window.variables.comparisonRoot, isActive: window.location.pathname == window.variables.comparisonRoot })),
                React.createElement("div", { className: "flex-filler" }))));
    }
}
//# sourceMappingURL=FixedHeader.js.map