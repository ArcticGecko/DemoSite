import * as React from 'react';

export interface DisplayTileProps {
    src: string;
    href: string;
}

export class DisplayTile extends React.Component<DisplayTileProps> {
    constructor(props: DisplayTileProps) {
        super(props);
    }

    render() {
        const style: React.CSSProperties = {
            background: `url('${this.props.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        return (
            <div className="tile-wrapper">
                <div className="display-tile flex-column" style={style}>
                    <div className="display-tile-inner">
                        <p>
                            {this.props.children}
                        </p>
                        <a href={this.props.href} target="_blank">
                            <button className="display-tile-button">Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}