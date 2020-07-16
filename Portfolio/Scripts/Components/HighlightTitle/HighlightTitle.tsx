import * as React from 'react';
import { HighlightChar } from './HighlightChar';

export interface HighlightTitleProps {

}

export class HighlightTitle extends React.Component<HighlightTitleProps> {
    constructor(props: HighlightTitleProps) {
        super(props);

    }

    render() {
        const childText: string = this.props.children.toString();
        const childEls: React.ReactNode[] = [];
        for (let i = 0; i < childText.length; i++) {
            childEls.push(<HighlightChar key={`char-${i}`} >{childText[i]}</HighlightChar>)
        }
        return (
            <div className="highlight-title">
                {childEls}
            </div>
        );
    }
}