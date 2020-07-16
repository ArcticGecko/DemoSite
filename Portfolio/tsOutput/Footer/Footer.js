import * as React from 'react';
import { FooterButton } from './';
export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "footer" },
            React.createElement("div", { className: "footer-inner flex-row" },
                React.createElement("div", { className: "flex-filler" }),
                React.createElement("div", { className: "content-width flex-column footer-content" },
                    React.createElement("div", { className: "footer-button-container" },
                        React.createElement(FooterButton, { src: "/content/Email.svg", href: `mailto:${window.variables.emailAddress}` }),
                        React.createElement(FooterButton, { src: "/content/GitHub.svg", href: "https://github.com/ArcticGecko" }),
                        React.createElement(FooterButton, { src: "/content/LinkedIn.svg", href: "https://linkedin.com/in/oliver-mcmillan" })),
                    React.createElement("h3", { className: "footer-title" }, "Built by me")),
                React.createElement("div", { className: "flex-filler" }))));
    }
}
//# sourceMappingURL=Footer.js.map