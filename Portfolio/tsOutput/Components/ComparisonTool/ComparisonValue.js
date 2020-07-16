import * as React from 'react';
export class ComparisonValue extends React.Component {
    constructor(props) {
        super(props);
        this.startEditing = this.startEditing.bind(this);
        this.editingStarted = this.editingStarted.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.endEdit = this.endEdit.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
        this.handleDocKeyPress = this.handleDocKeyPress.bind(this);
        this.state = {
            IsEditing: false,
            EditingValue: ""
        };
    }
    startEditing() {
        this.setState({
            IsEditing: true,
            EditingValue: this.props.Value
        }, this.editingStarted);
    }
    editingStarted() {
        this.inputElement.focus();
        document.addEventListener("keydown", this.handleDocKeyPress);
    }
    async submitEdit() {
        await this.props.EditCallback(this.props.ItemKey, this.props.RowKey, this.state.EditingValue);
        this.endEdit();
    }
    endEdit() {
        this.setState({
            EditingValue: "",
            IsEditing: false
        });
    }
    handleTextInput(ev) {
        this.setState({
            EditingValue: ev.target.value
        });
    }
    handleInputKeyPress(ev) {
        switch (ev.charCode) {
            case 13:
                this.submitEdit();
                break;
            case 24:
            case 27:
                this.endEdit();
                break;
        }
    }
    handleDocKeyPress(ev) {
        switch (ev.keyCode) {
            case 24:
            case 27:
                this.endEdit();
                break;
        }
    }
    render() {
        return (React.createElement(React.Fragment, null,
            !this.state.IsEditing &&
                React.createElement("td", { onClick: this.startEditing }, this.props.Value),
            this.state.IsEditing &&
                React.createElement("td", null,
                    React.createElement("input", { onBlur: this.submitEdit, ref: (r) => this.inputElement = r, type: "text", onChange: this.handleTextInput, value: this.state.EditingValue || "", onKeyPress: this.handleInputKeyPress }))));
    }
}
//# sourceMappingURL=ComparisonValue.js.map