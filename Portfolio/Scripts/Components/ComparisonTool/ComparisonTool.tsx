import * as React from 'react';
import {AddButton, AddRowDialog, ComparisonValue, DeleteButton, Dictionary} from "./";
import {ObjectUtils, IReturnJsonModel} from "../../Utilities";
import {Popup} from "../Popup";
import * as lodash from 'lodash';

export interface ComparisonRow {
    Name: string;
    ValueType: "String" | "Numeric";
}

export interface ComparisonToolProps {
    Rows: object;
    Items: object;
}

export interface ComparisonToolState {
    Rows: Dictionary<number, ComparisonRow>;
    Items: Dictionary<number, Dictionary<number, string>>;
    AddRowDialog?: React.ReactNode;
    ErrorMessage?: string;
}

export class ComparisonTool extends React.Component<ComparisonToolProps, ComparisonToolState> {

    constructor(props: ComparisonToolProps) {
        super(props);
        const rowKeys: Array<string> = Object.keys(this.props.Rows);
        const rows: Dictionary<number, ComparisonRow> = new Dictionary();
        for (let i = 0; i < rowKeys.length; i++) {
            const index: number = parseInt(rowKeys[i]);
            const row: ComparisonRow = {
                Name: this.props.Rows[index].Item1,
                ValueType: ComparisonTool.getTypeFromNumber(this.props.Rows[index].Item2)
            };
            rows.add(index, row);
        }
        // 
        const itemKeys: Array<string> = Object.keys(this.props.Items);
        const items: Dictionary<number, Dictionary<number, string>> = new Dictionary();
        for (let i = 0; i < itemKeys.length; i++) {
            const itemIndex: number = parseInt(itemKeys[i]);
            const unparsedItem: object = this.props.Items[itemIndex];
            const item: Dictionary<number, string> = new Dictionary();
            const itemValueKeys: Array<string> = Object.keys(unparsedItem);
            for (let j = 0; j < itemValueKeys.length; j++) {
                const itemValueIndex: number = parseInt(itemValueKeys[j]);
                const itemValue: string = unparsedItem[itemValueIndex].Value;
                item.add(itemValueIndex, itemValue);
            }
            items.add(itemIndex, item);
        }

        this.addRow = this.addRow.bind(this);
        this.addRowCallback = this.addRowCallback.bind(this);
        this.closeRowCallback = this.closeRowCallback.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.setValue = this.setValue.bind(this);
        this.clearSession = this.clearSession.bind(this);
        this.handleClearButtonClick = this.handleClearButtonClick.bind(this);

        this.state = {
            Rows: rows,
            Items: items,
            AddRowDialog: null
        };
    }

    private static getTypeFromNumber(input: number): "String" | "Numeric" {
        switch (input) {
            case 0 :
                return "String";
            case 1:
                return "Numeric";
        }
    }

    private async addRow(name: string, type: "String" | "Numeric"): Promise<void> {
        const result: IReturnJsonModel<number> = await $.ajax("/Comparison/AddRow", {
            method: "POST",
            data: {name: name, type: type}
        });
        if (result.wasSuccessful) {
            const newRow: ComparisonRow = {
                Name: name,
                ValueType: type
            };
            const rows: Dictionary<number, ComparisonRow> = lodash.cloneDeep(this.state.Rows);
            rows.add(result.value, newRow);
            this.setState({
                Rows: rows,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private addRowCallback(): void {
        this.setState({
            AddRowDialog: <AddRowDialog SubmitCallback={this.addRow} CloseCallback={this.closeRowCallback}/>
        });
    }

    private closeRowCallback(): void {
        this.setState({
            AddRowDialog: null
        });
    }

    private async removeRow(rowId: number): Promise<void> {
        const result: IReturnJsonModel<number> = await $.ajax("/Comparison/RemoveRow", {
            method: "POST",
            data: {rowId: rowId}
        });
        if (result.wasSuccessful) {
            const rows: Dictionary<number, ComparisonRow> = lodash.cloneDeep(this.state.Rows);
            const items: Dictionary<number, Dictionary<number, string>> = lodash.cloneDeep(this.state.Items);
            rows.remove(rowId);
            items.forEach((key: number, value: Dictionary<number, string>) => {
                value.remove(rowId);
            });
            this.setState({
                Rows: rows,
                Items: items,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private async addItem(): Promise<void> {
        const result: IReturnJsonModel<number> = await $.ajax("/Comparison/AddItem", {method: "POST"});
        if (result.wasSuccessful) {
            const items: Dictionary<number, Dictionary<number, string>> = lodash.cloneDeep(this.state.Items);
            items.add(result.value, new Dictionary<number, string>());
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private async removeItem(itemId: number): Promise<void> {
        const result: IReturnJsonModel<number> = await $.ajax("/Comparison/RemoveItem", {
            method: "POST",
            data: {itemId: itemId}
        });
        if (result.wasSuccessful) {
            const items: Dictionary<number, Dictionary<number, string>> = lodash.cloneDeep(this.state.Items);
            items.remove(itemId);
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private async setValue(itemId: number, rowId: number, value: string): Promise<void> {
        const result: IReturnJsonModel<number> = await $.ajax("/Comparison/SetValue", {
            method: "POST",
            data: {itemId: itemId, rowId: rowId, value: value}
        });
        if (result.wasSuccessful) {
            const items: Dictionary<number, Dictionary<number, string>> = lodash.cloneDeep(this.state.Items);
            items.get(itemId).set(rowId, value);
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private async clearSession(): Promise<void> {
        const result: IReturnJsonModel<any> = await $.ajax("Comparison/ClearSession", {method: "POST"});
        if (result.wasSuccessful) {
            const rows: Dictionary<number, ComparisonRow> = new Dictionary<number, ComparisonRow>();
            const items: Dictionary<number, Dictionary<number, string>> = new Dictionary<number, Dictionary<number, string>>();
            this.setState({
                Items: items,
                Rows: rows,
                ErrorMessage: null
            });
        } else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }

    private handleClearButtonClick(): void {
        this.clearSession();
    }

    private getRow(key: number, value: ComparisonRow): React.ReactNode {
        const rowContent: React.ReactNode[] = [];
        rowContent.push(
            <td key={`rowCell-${key}`}><DeleteButton Id={key} DeleteCallback={this.removeRow}/>{value.Name}</td>
        );
        const parentKey: number = key;
        this.state.Items.forEach((key: number, value: Dictionary<number, string>) => {
            rowContent.push(this.getCell(key, value, parentKey));
        });
        return (
            <tr key={`row-${key}`}>{rowContent}</tr>
        );
    }

    private getCell(key: number, value: Dictionary<number, string>, rowKey: number): React.ReactNode {
        if (value) {
            const rowValue: string = value.get(rowKey);
            return (
                <ComparisonValue key={`cell-${rowKey}-${key}`} RowKey={rowKey} ItemKey={key} Value={rowValue}
                                 EditCallback={this.setValue}/>
            );
        } else {
            return (
                <ComparisonValue key={`cell-${rowKey}-${key}`} RowKey={rowKey} ItemKey={key} Value={""}
                                 EditCallback={this.setValue}/>
            );
        }
    }

    render() {
        const tableRows: React.ReactNode[] = [];
        const firstRow: React.ReactNode[] = [];
        firstRow.push(
            <td key="corner-filler"/>
        );
        this.state.Items.forEach((key: number, value: Dictionary<number, string>) => {
            firstRow.push(
                <td key={`delete-container-${key}`}>
                    <DeleteButton Id={key} DeleteCallback={this.removeItem}/>
                </td>
            );
        });
        if (this.state.Rows.length > 0) {
            firstRow.push(
                <td key="add-col" rowSpan={this.state.Rows.length + 1}>
                    <AddButton Orientation="column" Callback={this.addItem}/>
                </td>
            );
        }
        tableRows.push(
            <tr key="first-row">
                {firstRow}
            </tr>
        );
        this.state.Rows.forEach((key: number, value: ComparisonRow) => {
            tableRows.push(this.getRow(key, value));
        });
        let addRowClass: string = this.state.Rows.length == 0 ? "show" : "";
        tableRows.push(
            <tr key="add-row">
                <td key="add-row" colSpan={this.state.Items.length + 1} className={addRowClass}>
                    <AddButton Orientation="row" Callback={this.addRowCallback}/>
                </td>
            </tr>
        );
        return (
            <React.Fragment>
                <div className="comparison-control-container">
                    <button onClick={this.handleClearButtonClick}>Clear</button>
                    {this.state.ErrorMessage &&
                    <span className="error-message">{this.state.ErrorMessage}</span>
                    }
                </div>
                <table className="comparison-tool" cellPadding={0} cellSpacing={0}>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
                {this.state.AddRowDialog &&
                <Popup Content={this.state.AddRowDialog}/>
                }
            </React.Fragment>
        );
    }

}