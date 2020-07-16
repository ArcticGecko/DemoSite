import * as React from 'react';
import { AddButton, AddRowDialog, ComparisonValue, DeleteButton, Dictionary } from "./";
import { Popup } from "../Popup";
import * as lodash from 'lodash';
export class ComparisonTool extends React.Component {
    constructor(props) {
        super(props);
        const rowKeys = Object.keys(this.props.Rows);
        const rows = new Dictionary();
        for (let i = 0; i < rowKeys.length; i++) {
            const index = parseInt(rowKeys[i]);
            const row = {
                Name: this.props.Rows[index].Item1,
                ValueType: ComparisonTool.getTypeFromNumber(this.props.Rows[index].Item2)
            };
            rows.add(index, row);
        }
        const itemKeys = Object.keys(this.props.Items);
        const items = new Dictionary();
        for (let i = 0; i < itemKeys.length; i++) {
            const itemIndex = parseInt(itemKeys[i]);
            const unparsedItem = this.props.Items[itemIndex];
            const item = new Dictionary();
            const itemValueKeys = Object.keys(unparsedItem);
            for (let j = 0; j < itemValueKeys.length; j++) {
                const itemValueIndex = parseInt(itemValueKeys[j]);
                const itemValue = unparsedItem[itemValueIndex].Value;
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
    static getTypeFromNumber(input) {
        switch (input) {
            case 0:
                return "String";
            case 1:
                return "Numeric";
        }
    }
    async addRow(name, type) {
        const result = await $.ajax("/Comparison/AddRow", {
            method: "POST",
            data: { name: name, type: type }
        });
        if (result.wasSuccessful) {
            const newRow = {
                Name: name,
                ValueType: type
            };
            const rows = lodash.cloneDeep(this.state.Rows);
            rows.add(result.value, newRow);
            this.setState({
                Rows: rows,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    addRowCallback() {
        this.setState({
            AddRowDialog: React.createElement(AddRowDialog, { SubmitCallback: this.addRow, CloseCallback: this.closeRowCallback })
        });
    }
    closeRowCallback() {
        this.setState({
            AddRowDialog: null
        });
    }
    async removeRow(rowId) {
        const result = await $.ajax("/Comparison/RemoveRow", {
            method: "POST",
            data: { rowId: rowId }
        });
        if (result.wasSuccessful) {
            const rows = lodash.cloneDeep(this.state.Rows);
            const items = lodash.cloneDeep(this.state.Items);
            rows.remove(rowId);
            items.forEach((key, value) => {
                value.remove(rowId);
            });
            this.setState({
                Rows: rows,
                Items: items,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    async addItem() {
        const result = await $.ajax("/Comparison/AddItem", { method: "POST" });
        if (result.wasSuccessful) {
            const items = lodash.cloneDeep(this.state.Items);
            items.add(result.value, new Dictionary());
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    async removeItem(itemId) {
        const result = await $.ajax("/Comparison/RemoveItem", {
            method: "POST",
            data: { itemId: itemId }
        });
        if (result.wasSuccessful) {
            const items = lodash.cloneDeep(this.state.Items);
            items.remove(itemId);
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    async setValue(itemId, rowId, value) {
        const result = await $.ajax("/Comparison/SetValue", {
            method: "POST",
            data: { itemId: itemId, rowId: rowId, value: value }
        });
        if (result.wasSuccessful) {
            const items = lodash.cloneDeep(this.state.Items);
            items.get(itemId).set(rowId, value);
            this.setState({
                Items: items,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    async clearSession() {
        const result = await $.ajax("Comparison/ClearSession", { method: "POST" });
        if (result.wasSuccessful) {
            const rows = new Dictionary();
            const items = new Dictionary();
            this.setState({
                Items: items,
                Rows: rows,
                ErrorMessage: null
            });
        }
        else {
            this.setState({
                ErrorMessage: result.message
            });
        }
    }
    handleClearButtonClick() {
        this.clearSession();
    }
    getRow(key, value) {
        const rowContent = [];
        rowContent.push(React.createElement("td", { key: `rowCell-${key}` },
            React.createElement(DeleteButton, { Id: key, DeleteCallback: this.removeRow }),
            value.Name));
        const parentKey = key;
        this.state.Items.forEach((key, value) => {
            rowContent.push(this.getCell(key, value, parentKey));
        });
        return (React.createElement("tr", { key: `row-${key}` }, rowContent));
    }
    getCell(key, value, rowKey) {
        if (value) {
            const rowValue = value.get(rowKey);
            return (React.createElement(ComparisonValue, { key: `cell-${rowKey}-${key}`, RowKey: rowKey, ItemKey: key, Value: rowValue, EditCallback: this.setValue }));
        }
        else {
            return (React.createElement(ComparisonValue, { key: `cell-${rowKey}-${key}`, RowKey: rowKey, ItemKey: key, Value: "", EditCallback: this.setValue }));
        }
    }
    render() {
        const tableRows = [];
        const firstRow = [];
        firstRow.push(React.createElement("td", { key: "corner-filler" }));
        this.state.Items.forEach((key, value) => {
            firstRow.push(React.createElement("td", { key: `delete-container-${key}` },
                React.createElement(DeleteButton, { Id: key, DeleteCallback: this.removeItem })));
        });
        if (this.state.Rows.length > 0) {
            firstRow.push(React.createElement("td", { key: "add-col", rowSpan: this.state.Rows.length + 1 },
                React.createElement(AddButton, { Orientation: "column", Callback: this.addItem })));
        }
        tableRows.push(React.createElement("tr", { key: "first-row" }, firstRow));
        this.state.Rows.forEach((key, value) => {
            tableRows.push(this.getRow(key, value));
        });
        let addRowClass = this.state.Rows.length == 0 ? "show" : "";
        tableRows.push(React.createElement("tr", { key: "add-row" },
            React.createElement("td", { key: "add-row", colSpan: this.state.Items.length + 1, className: addRowClass },
                React.createElement(AddButton, { Orientation: "row", Callback: this.addRowCallback }))));
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "comparison-control-container" },
                React.createElement("button", { onClick: this.handleClearButtonClick }, "Clear"),
                this.state.ErrorMessage &&
                    React.createElement("span", { className: "error-message" }, this.state.ErrorMessage)),
            React.createElement("table", { className: "comparison-tool", cellPadding: 0, cellSpacing: 0 },
                React.createElement("tbody", null, tableRows)),
            this.state.AddRowDialog &&
                React.createElement(Popup, { Content: this.state.AddRowDialog })));
    }
}
//# sourceMappingURL=ComparisonTool.js.map