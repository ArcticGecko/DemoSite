import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../../Utilities/index';
export class Box extends React.Component {
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
        if (this.props.src) {
            this.getContent();
        }
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }
    async getContent() {
        const result = await $.ajax(this.props.src, { method: "GET" });
        const serializer = new XMLSerializer();
        this.setState({ svgContent: serializer.serializeToString(result) });
    }
    findGradientColor() {
        if (this.containerRef) {
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
    }
    render() {
        return (React.createElement("div", { className: "box" },
            this.props.src &&
                React.createElement(React.Fragment, null,
                    React.createElement("style", null,
                        "#",
                        this.state.id,
                        ":hover > svg ",
                        '{',
                        "fill: ",
                        this.state.color,
                        ";",
                        '}'),
                    React.createElement("div", { className: "box-icon", id: this.state.id, ref: (r) => this.containerRef = r, dangerouslySetInnerHTML: { __html: this.state.svgContent } })),
            this.props.title &&
                React.createElement("h2", null, this.props.title),
            React.createElement("ul", null, this.props.children)));
    }
}
//# sourceMappingURL=Box.js.map