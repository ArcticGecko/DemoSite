import * as React from 'react';
export class PdfButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "pdf-button" },
            React.createElement("a", { href: "/content/Resume - Oliver McMillan.pdf", download: true },
                React.createElement("img", { className: "pdf-icon", alt: "Download PDF", src: "/content/PdfIcon.svg" }))));
    }
}
//# sourceMappingURL=PdfButton.js.map