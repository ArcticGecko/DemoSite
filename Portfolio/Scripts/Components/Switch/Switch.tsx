import * as React from 'react';

export interface SwitchProps {
    onSwitch: (switchState: boolean) => void;
    initialState: boolean;
}

export interface SwitchState {
    switch: boolean;
}

export class Switch extends React.Component<SwitchProps, SwitchState> {

    constructor(props: SwitchProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            switch: this.props.initialState
        };
    }

    private onChange(ev: React.ChangeEvent<HTMLInputElement>): void {
        const newValue: boolean = ev.target.value == "on";
        this.props.onSwitch(newValue);
        this.setState({
            switch: newValue
        });
        
    }

    render() {

        return (
            <label className="switch">
                <input type="checkbox" onChange={this.onChange} checked={this.state.switch}/>
                <span className="slider round"/>
            </label>
        );
    }

}