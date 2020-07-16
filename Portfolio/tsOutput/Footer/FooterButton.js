import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../Utilities';
export class FooterButton extends React.Component {
    constructor(props) {
        super(props);
        this.getContent = this.getContent.bind(this);
        this.findGradientColor = this.findGradientColor.bind(this);
        this.state = {
            id: KeyUtilities.getKey(),
            color: "white",
            svgContent: null
        };
    }
    componentDidMount() {
        this.getContent();
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }
    async getContent() {
        const result = await $.ajax(this.props.src, { method: "GET" });
        const serializer = new XMLSerializer();
        this.setState({ svgContent: serializer.serializeToString(result) });
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
        const style = {
            background: `url('${this.props.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("style", null,
                "#",
                this.state.id,
                ":hover > svg ",
                '{',
                "fill: ",
                this.state.color,
                ";",
                '}'),
            React.createElement("a", { href: this.props.href, target: "_blank" },
                React.createElement("div", { ref: (r) => this.containerRef = r, id: this.state.id, className: "footer-button", dangerouslySetInnerHTML: { __html: this.state.svgContent } }))));
    }
}
//# sourceMappingURL=FooterButton.js.map