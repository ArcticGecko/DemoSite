import * as React from 'react';
export class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.DeleteCallback(this.props.Id);
    }
    render() {
        return (React.createElement("div", { className: "delete-button", onClick: this.handleClick }, "X"));
    }
}
//# sourceMappingURL=DeleteButton.js.map