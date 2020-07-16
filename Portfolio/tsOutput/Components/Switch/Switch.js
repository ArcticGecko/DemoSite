import * as React from 'react';
export class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            switch: this.props.initialState
        };
    }
    onChange(ev) {
        const newValue = ev.target.value == "on";
        this.props.onSwitch(newValue);
        this.setState({
            switch: newValue
        });
    }
    render() {
        return (React.createElement("label", { className: "switch" },
            React.createElement("input", { type: "checkbox", onChange: this.onChange, checked: this.state.switch }),
            React.createElement("span", { className: "slider round" })));
    }
}
//# sourceMappingURL=Switch.js.map