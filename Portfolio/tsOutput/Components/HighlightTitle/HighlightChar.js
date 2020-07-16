import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../../Utilities/index';
export class HighlightChar extends React.Component {
    constructor(props) {
        super(props);
        this.findGradientColor = this.findGradientColor.bind(this);
        this.state = {
            id: KeyUtilities.getKey(),
            color: "white"
        };
    }
    componentDidMount() {
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }
    findGradientColor() {
        let pos = 0;
        let color = "white";
        pos = PositionTools.findHorizontalPositionRelativeToWindow(this.containerRef);
        const startColor = new Color();
        startColor.setFromHexString(window.variables.gradientStart);
        const endColor = new Color();
        endColor.setFromHexString(window.variables.gradientEnd);
        const c = ColorUtilities.getPositionOnGradient(startColor, endColor, pos);
        color = c.hex;
        this.setState({
            color: color
        });
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("style", null,
                "#",
                this.state.id,
                ":hover ",
                '{',
                "color: ",
                this.state.color,
                ";",
                '}'),
            React.createElement("div", { className: "highlight-char", id: this.state.id, ref: (r) => this.containerRef = r }, this.props.children)));
    }
}
//# sourceMappingURL=HighlightChar.js.map