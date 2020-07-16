import * as React from 'react';

export interface BoxDisplayProps {
    position: "top" | "middle" | "bottom";
}

export class BoxDisplay extends React.Component<BoxDisplayProps> {

    constructor(props: BoxDisplayProps) {
        super(props);
    }

    render() {
        const classes: string = `display-box ${this.props.position} center-horizontal secondary-content-width`;
        const childCount: number = React.Children.count(this.props.children);
        return (
            <div className={classes}>
                {
                    React.Children.map(this.props.children, (child, i) =>
                        <React.Fragment>
                            {i == childCount - 1 &&
                                <React.Fragment>
                                    {child}
                                </React.Fragment>
                            }
                            {i != childCount - 1 &&
                                <React.Fragment>
                                    {child}
                                    <div className="box-divider"/>
                                </React.Fragment>
                            }
                        </React.Fragment>)
                }
            </div>
        );
    }
}