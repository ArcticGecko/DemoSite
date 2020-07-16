import * as React from 'react';
import { Color, ColorUtilities, PositionTools, KeyUtilities } from '../../Utilities/index';

export interface BoxProps {
    title?: string;
    src?: string;
}

export interface BoxState {
    id: string;
    color: string;
    svgContent: string;
}

export class Box extends React.Component<BoxProps, BoxState> {

    private containerRef: HTMLDivElement;

    constructor(props: BoxProps) {
        super(props);
        this.getContent = this.getContent.bind(this);
        this.findGradientColor = this.findGradientColor.bind(this);
        this.state = {
            id: KeyUtilities.getKey(),
            color: "white",
            svgContent: null
        };
    }

    componentDidMount() {
        if (this.props.src) {
            this.getContent();
        }
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }

    private async getContent(): Promise<void> {
        const result: XMLDocument = await $.ajax(this.props.src, { method: "GET" });
        const serializer: XMLSerializer = new XMLSerializer();
        this.setState({ svgContent: serializer.serializeToString(result) });
    }

    private findGradientColor() {
        if (this.containerRef) {
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
    }

    render() {

        return (
            <div className="box">
                {this.props.src &&
                    <React.Fragment>
                        <style>
                            #{this.state.id}:hover > svg {'{'}
                            fill: {this.state.color};
                            {'}'}
                        </style>
                        <div className="box-icon" id={this.state.id} ref={(r) => this.containerRef = r} dangerouslySetInnerHTML={{ __html: this.state.svgContent }} />
                    </React.Fragment>
                }
                {this.props.title &&
                    <h2>{this.props.title}</h2>
                }
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}