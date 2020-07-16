import * as React from 'react';
import {BoxContainer, Box, BoxDisplay, DisplayTile, TileContainer} from '../Components';

export interface IndexPageProps {

}

export class IndexPage extends React.Component<IndexPageProps> {
    constructor(props: IndexPageProps) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <div className="index-top-display">
                    <div className="center-horizontal secondary-content-width index-title-container">
                        <h1>Full-Stack Web Developer</h1>
                    </div>
                    <BoxContainer>
                        <BoxDisplay position="top">
                            <Box title="Front End" src="/content/WebPage.svg">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>TypeScript</li>
                                <li>WebPack</li>
                            </Box>
                            <Box title="Server" src="/content/Server.svg">
                                <li>IIS</li>
                                <li>C#</li>
                                <li>.NET Core</li>
                                <li>.NET Framework</li>
                                <li>MVC</li>
                                <li>Node JS</li>
                            </Box>
                            <Box title="DataBase" src="/content/DataBase.svg">
                                <li>T-SQL</li>
                                <li>SSMS</li>
                                <li>SQL Server Agent</li>
                                <li>ADO.NET</li>
                                <li>QGIS</li>
                            </Box>
                        </BoxDisplay>
                        <BoxDisplay position="middle">
                            <Box title="To Build..."/>
                            <Box title="To Run..."/>
                            <Box title="To Manage..."/>
                        </BoxDisplay>
                        <BoxDisplay position="bottom">
                            <Box>
                                <li>Responsive Front Ends</li>
                                <li>Data Visualisation</li>
                                <li>Mapping Tools</li>
                            </Box>
                            <Box>
                                <li>Secure Login Systems</li>
                                <li>Live Data Feeds</li>
                                <li>Scheduled Tasks</li>
                            </Box>
                            <Box>
                                <li>Large Volumes of Data</li>
                                <li>Geospacial Data</li>
                                <li>Data Aggregation</li>
                            </Box>
                        </BoxDisplay>
                    </BoxContainer>
                    <div className="top-display-text center-horizontal secondary-content-width">
                        <h3>Hi, I'm Oliver...</h3>
                        <p>...a full-stack developer of 3 years experience. In that time I've worked primarily in
                            creating systems to automatically aggregate and visualise geospatial data, but I also have
                            experience building Web and WPF applications.
                            I have interests in engineering, physics, and software systems.</p>
                    </div>
                </div>
                <div className="center-horizontal secondary-content-width">
                    <h2>My Work</h2>
                    <TileContainer>
                        <DisplayTile src="/content/Metricell.png" href="https://www.metricell.com/">
                            Metricell is a successful startup company from Horsham offering Geospatial Intelligence
                            Solutions for Government bodies, Enterprises and Network Operators.
                            I have been working here for 3 years, helping build and maintain their SmartTools
                            applications, and gaining my Level 3 Software technician qulaification.
                        </DisplayTile>
                        <DisplayTile src="/content/Unum.png" href="https://www.unum.co.uk/">
                            UNUM is a Disability, Life, and Financial insurance provider, and one of the largest in the
                            UK. It is where I gained my first eight weeks of work experience in IT field, during my time
                            their I helped audit equipment, deploy new hardware resources, and maintain the existing
                            infrastucture.
                        </DisplayTile>
                    </TileContainer>
                </div>
                <div className="spacer"/>
            </React.Fragment>
        )
    }
}
