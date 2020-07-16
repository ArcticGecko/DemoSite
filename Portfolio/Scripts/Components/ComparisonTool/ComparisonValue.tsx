import * as React from 'react';

export interface ComparisonValueProps {
    RowKey: number;
    ItemKey: number;
    Value: string;
    EditCallback: (itemId: number, rowId: number, value: string) => Promise<void>;
}

export interface ComparisonValueState {
    IsEditing: boolean;
    EditingValue?: string;
}

export class ComparisonValue extends React.Component<ComparisonValueProps, ComparisonValueState> {

    private inputElement: HTMLInputElement;

    constructor(props: ComparisonValueProps) {
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

    private startEditing(): void {
        this.setState({
            IsEditing: true,
            EditingValue: this.props.Value
        }, this.editingStarted);
    }

    private editingStarted(): void {
        this.inputElement.focus();
        document.addEventListener("keydown", this.handleDocKeyPress);
    }

    private async submitEdit(): Promise<void> {
        await this.props.EditCallback(this.props.ItemKey, this.props.RowKey, this.state.EditingValue);
        this.endEdit();
    }

    private endEdit(): void {
        this.setState({
            EditingValue: "",
            IsEditing: false
        })
    }

    private handleTextInput(ev: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            EditingValue: ev.target.value
        });
    }

    private handleInputKeyPress(ev: React.KeyboardEvent): void {
        switch (ev.charCode) {
            case 13 :
                this.submitEdit();
                break;
            case 24:
            case 27:
                this.endEdit();
                break;
        }
    }

    private handleDocKeyPress(ev: any): void {
        switch (ev.keyCode) {
            case 24:
            case 27:
                this.endEdit();
                break;
        }
    }

    render() {

        return (
            <React.Fragment>
                {!this.state.IsEditing &&
                <td onClick={this.startEditing}>
                    {this.props.Value}
                </td>
                }
                {this.state.IsEditing &&
                <td>
                    <input onBlur={this.submitEdit} ref={(r) => this.inputElement = r} type="text" onChange={this.handleTextInput}
                           value={this.state.EditingValue || ""} onKeyPress={this.handleInputKeyPress}/>
                </td>
                }
            </React.Fragment>
        );
    }

}