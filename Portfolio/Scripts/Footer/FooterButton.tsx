import * as React from 'react';
import {Color, ColorUtilities, PositionTools, KeyUtilities} from '../Utilities';

export interface FooterButtonProps {
    src: string;
    href?: string;
}

export interface FooterButtonState {
    id: string;
    color: string;
    svgContent: string;
}

export class FooterButton extends React.Component<FooterButtonProps, FooterButtonState> {

    private containerRef: HTMLDivElement;

    constructor(props: FooterButtonProps) {
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
        this.getContent();
        this.findGradientColor();
        window.addEventListener("resize", this.findGradientColor);
    }

    private async getContent(): Promise<void> {
        const result: XMLDocument = await $.ajax(this.props.src, {method: "GET"});
        const serializer: XMLSerializer = new XMLSerializer();
        this.setState({svgContent: serializer.serializeToString(result)});
    }

    private findGradientColor(): void {
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
        const style: React.CSSProperties = {
            background: `url('${this.props.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        return (
            <React.Fragment>
                <style>
                    #{this.state.id}:hover > svg {'{'}
                    fill: {this.state.color};
                    {'}'}
                </style>
                <a href={this.props.href} target="_blank">
                    <div ref={(r) => this.containerRef = r} id={this.state.id} className="footer-button"
                         dangerouslySetInnerHTML={{__html: this.state.svgContent}}>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}