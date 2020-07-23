import * as React from 'react';
import { FooterButton } from './';

export interface FooterProps {

}

export class Footer extends React.Component<FooterProps> {
    constructor(props: FooterProps) {
        super(props);
    }

    render() {

        return (
            <div className="footer">
                <div className="footer-inner flex-row">
                    <div className="flex-filler"/>
                    <div className="content-width flex-column footer-content">
                        <div className="footer-button-container">
                            <FooterButton src="/content/Email.svg" href={`mailto:${window.variables.emailAddress}`} />
                            <FooterButton src="/content/GitHub.svg" href="https://github.com/ArcticGecko" />
                            <FooterButton src="/content/LinkedIn.svg" href="https://linkedin.com/in/oliver-mcmillan" />
                        </div>
                        <h3 className="footer-title">Built by me</h3>
                        <h5 className="footer-title">Hosted with AWS</h5>
                    </div>
                    <div className="flex-filler"/>
                </div>
            </div>
        );
    }
}