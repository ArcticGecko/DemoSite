import * as React from 'react';
import { HighlightChar } from './HighlightChar';
export class HighlightTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const childText = this.props.children.toString();
        const childEls = [];
        for (let i = 0; i < childText.length; i++) {
            childEls.push(React.createElement(HighlightChar, { key: `char-${i}` }, childText[i]));
        }
        return (React.createElement("div", { className: "highlight-title" }, childEls));
    }
}
//# sourceMappingURL=HighlightTitle.js.map