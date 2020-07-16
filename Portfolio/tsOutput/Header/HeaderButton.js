import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../Utilities';
export class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
        this.findGradientColor = this.findGradientColor.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
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
    onClickHandler() {
        window.location.href = this.props.href;
    }
    render() {
        const isActiveClass = this.props.isActive ? "active" : "";
        return (React.createElement(React.Fragment, null,
            React.createElement("style", null,
                "#",
                this.state.id,
                ":hover, #",
                this.state.id,
                ".active ",
                '{',
                "color: ",
                this.state.color,
                ";",
                '}'),
            React.createElement("div", { id: this.state.id, ref: (r) => this.containerRef = r, className: `header-button-container flex-column header-button-text ${isActiveClass}`, onClick: this.onClickHandler }, this.props.text)));
    }
}
//# sourceMappingURL=HeaderButton.js.map