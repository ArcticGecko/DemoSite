import * as React from 'react';
import {HeaderButton, HeaderTitle} from './';
import {HighlightTitle} from '../Components/HighlightTitle';

export interface FixedHeaderProps {

}

export class FixedHeader extends React.Component<FixedHeaderProps> {
    constructor(props: FixedHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="fixed-header-outer flex-row">
                <div className="fixed-header-inner flex-row">
                    <div className="flex-filler"/>
                    <div className="content-width flex-row">
                        <HighlightTitle>Oliver</HighlightTitle>
                        <div className="space-div"/>
                        <HighlightTitle>McMillan</HighlightTitle>
                        <div className="flex-filler"/>
                        <HeaderButton text="Home" href={window.variables.indexRoot}
                                      isActive={window.location.pathname == window.variables.indexRoot}/>
                        <HeaderButton text="Resume" href={window.variables.resumeRoot}
                                      isActive={window.location.pathname == window.variables.resumeRoot}/>
                        <HeaderButton text="Comparison Demo" href={window.variables.comparisonRoot}
                                      isActive={window.location.pathname == window.variables.comparisonRoot}/>
                    </div>
                    <div className="flex-filler"/>
                </div>
            </div>
        );
    }
}