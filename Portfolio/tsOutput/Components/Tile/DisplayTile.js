import * as React from 'react';
export class DisplayTile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            background: `url('${this.props.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        return (React.createElement("div", { className: "tile-wrapper" },
            React.createElement("div", { className: "display-tile flex-column", style: style },
                React.createElement("div", { className: "display-tile-inner" },
                    React.createElement("p", null, this.props.children),
                    React.createElement("a", { href: this.props.href, target: "_blank" },
                        React.createElement("button", { className: "display-tile-button" }, "Learn More"))))));
    }
}
//# sourceMappingURL=DisplayTile.js.map