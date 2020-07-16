import * as React from 'react';

export interface AddRowDialogProps {
    SubmitCallback: (name: string, type: "String" | "Numeric") => Promise<void>;
    CloseCallback: () => void;
}

export interface AddRowDialogState {
    Value: string;
    Type: "String" | "Numeric";
}

export class AddRowDialog extends React.Component<AddRowDialogProps, AddRowDialogState> {

    constructor(props: AddRowDialogProps) {
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            Value: "",
            Type: "String"
        };
    }

    private async handleAddClick(): Promise<void> {
        await this.props.SubmitCallback(this.state.Value, this.state.Type);
        this.props.CloseCallback();
    }

    private handleInput(ev: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            Value: ev.target.value
        });
    }

    private handleSelect(ev: React.ChangeEvent<HTMLSelectElement>): void {
        const newType: "String" | "Numeric" = ev.target.value as ("String" | "Numeric");
        this.setState({
            Type: newType
        })
    }

    render() {

        return (
            <div className="add-row-dialog">
                <input type="text" onChange={this.handleInput} placeholder="Row Name"/>
                <select value={this.state.Type} onChange={this.handleSelect}>
                    <option value="String">String</option>
                    <option value="Numeric">Numeric</option>
                </select>
                <div>
                    <button onClick={this.handleAddClick}>Add</button>
                    <button onClick={this.props.CloseCallback}>Cancel</button>

                </div>
            </div>
        );
    }

}