import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../../Utilities/index';

export interface HighlightCharProps {

}

export interface HighlightCharState {
    id: string;
    color: string;
}

export class HighlightChar extends React.Component<HighlightCharProps, HighlightCharState>{

    private containerRef: HTMLDivElement;

    constructor(props: HighlightCharProps) {
        super(props);
        this.findGradientColor = this.findGradientColor.bind(this);
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

    render() {

        return (
            <React.Fragment>
                <style>
                    #{this.state.id}:hover {'{'}
                    color: {this.state.color};
                    {'}'}
                </style>
                <div className="highlight-char" id={this.state.id} ref={(r) => this.containerRef = r}>
                    {this.props.children}
                </div>
            </React.Fragment >
        );
    }
}