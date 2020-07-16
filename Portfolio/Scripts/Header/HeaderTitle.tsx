import * as React from 'react';

export interface HeaderTitleProps {

}

export class HeaderTitle extends React.Component<HeaderTitleProps> {
    constructor(props: HeaderTitleProps) {
        super(props);
    }

    render() {

        return (
            <div className="header-title">
                SHEEPY.SITE
            </div>
        );
    }
}