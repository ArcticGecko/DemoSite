import * as React from 'react';

export interface PdfButtonProps {

}

export class PdfButton extends React.Component<PdfButtonProps> {

    constructor(props: PdfButtonProps) {
        super(props);
    }

    render() {

        return (
            <div className="pdf-button">
                <a href="/content/Resume - Oliver McMillan.pdf" download>
                    <img className="pdf-icon" alt="Download PDF" src="/content/PdfIcon.svg"/>
                </a>
            </div>
        );
    }

}