import * as React from 'react';
export class AddRowDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            Value: "",
            Type: "String"
        };
    }
    async handleAddClick() {
        await this.props.SubmitCallback(this.state.Value, this.state.Type);
        this.props.CloseCallback();
    }
    handleInput(ev) {
        this.setState({
            Value: ev.target.value
        });
    }
    handleSelect(ev) {
        const newType = ev.target.value;
        this.setState({
            Type: newType
        });
    }
    render() {
        return (React.createElement("div", { className: "add-row-dialog" },
            React.createElement("input", { type: "text", onChange: this.handleInput, placeholder: "Row Name" }),
            React.createElement("select", { value: this.state.Type, onChange: this.handleSelect },
                React.createElement("option", { value: "String" }, "String"),
                React.createElement("option", { value: "Numeric" }, "Numeric")),
            React.createElement("div", null,
                React.createElement("button", { onClick: this.handleAddClick }, "Add"),
                React.createElement("button", { onClick: this.props.CloseCallback }, "Cancel"))));
    }
}
//# sourceMappingURL=AddRowDialog.js.map