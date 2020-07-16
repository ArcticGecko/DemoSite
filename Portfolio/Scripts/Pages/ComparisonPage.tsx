import * as React from 'react';
import {ComparisonTool} from '../Components';

export interface ComparisonPageProps {
    Rows: object;
    Items: object;
}

export class ComparisonPage extends React.Component<ComparisonPageProps> {

    constructor(props: ComparisonPageProps) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <p>
                    Click on a cell to edit it. <br/>
                    Press enter to commit the value. <br/>
                    Escape to cancel the edit. <br/>
                </p>
                <div className="comparison-tool-container">
                    <ComparisonTool {...this.props} />
                </div>
            </React.Fragment>
        );
    }

}