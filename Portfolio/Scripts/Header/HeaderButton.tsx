import * as React from 'react';
import {Color, ColorUtilities, PositionTools, KeyUtilities} from '../Utilities';

export interface HeaderButtonProps {
    text: string;
    href: string;
    isActive: boolean;
}

export interface HeaderButtonState {
    id: string;
    color: string;
}

export class HeaderButton extends React.Component<HeaderButtonProps, HeaderButtonState> {

    private containerRef: HTMLDivElement;

    constructor(props: HeaderButtonProps) {
        super(props);
        this.findGradientColor = this.findGradientColor.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            id: KeyUtilities.getKey(),
            color: "white"
        };
    }

    componentDidMount() {
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }

    private findGradientColor() {
        let pos: number = 0;
        let color: string = "white";
        pos = PositionTools.findHorizontalPositionRelativeToWindow(this.containerRef);
        const startColor: Color = new Color();
        startColor.setFromHexString(window.variables.gradientStart);
        const endColor: Color = new Color();
        endColor.setFromHexString(window.variables.gradientEnd);
        const c: Color = ColorUtilities.getPositionOnGradient(startColor, endColor, pos);
        color = c.hex;
        this.setState({
            color: color
        });
    }

    private onClickHandler() {
        window.location.href = this.props.href;
    }

    render() {
        const isActiveClass: string = this.props.isActive ? "active" : "";

        return (
            <React.Fragment>
                <style>
                    #{this.state.id}:hover, #{this.state.id}.active {'{'}
                    color: {this.state.color};
                    {'}'}
                </style>
                <div id={this.state.id} ref={(r) => this.containerRef = r}
                     className={`header-button-container flex-column header-button-text ${isActiveClass}`} onClick={this.onClickHandler}>
                    {this.props.text}
                </div>
            </React.Fragment>
        );
    }
}