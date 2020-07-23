import * as React from 'react';
import {SmallTile, PdfButton} from "../Components";

export interface ResumePageProps {
}

export class ResumePage extends React.Component<ResumePageProps> {

    constructor(props: ResumePageProps) {
        super(props);
    }
    

    render() {

        return (
            <div className="resume secondary-content-width flex-column center-horizontal">
                <h1 className="resume-print-title">Oliver McMillan</h1>
                <div className="resume-summary flex-row">
                    <p>
                        Experienced Software Engineer with a demonstrated history of working in the telecommunications
                        industry. Skilled in C#, SQL, web architecture, and front-end web development. Organized and
                        dedicated engineering professional with a BCS qualification.
                    </p>
                    <PdfButton />
                </div>
                <div className="resume-vertical-divider"/>
                <div className="flex-row">
                    <div className="resume-left-column">
                        <h2>Work Experience</h2>
                        <h3>Metricell</h3>
                        <h4>2017 - Present</h4>
                        <ul>
                            <li>Maintained and enhanced systems to automatically aggregate and visualize geospatial
                                data.
                            </li>
                            <li>Designed and implemented secure login systems, user permission and profile management
                                features, and automated download pages.
                            </li>
                            <li>Used REST APIs to implement live feed data displays and create support tickets.</li>
                            <li>Maintained and supported large databases. 3000+ objects, 50,000,000,000+ records.</li>
                            <li>Managed regular live web deployments.</li>
                            <li>Interpreted, diagnosed and, fixed issues raised by the QA team or end users.</li>
                        </ul>
                        <h3>UNUM</h3>
                        <h4>2015 - 2017 Part Time</h4>
                        <ul>
                            <li>Audited IT equipment.</li>
                            <li>Set up and distributed new equiment to staff and teams.</li>
                            <li>Performed hardware and software maintenance on existing IT equipment.</li>
                        </ul>
                        <h2>Technologies</h2>
                        <div className="flex-row flex-wrap">
                            <SmallTile text="React"/>
                            <SmallTile text="HTML"/>
                            <SmallTile text="JavaScript"/>
                            <SmallTile text="TypeScript"/>
                            <SmallTile text="SASS"/>
                            <SmallTile text="CSS"/>
                            <SmallTile text="WebPack"/>
                            <SmallTile text="C#"/>
                            <SmallTile text=".Net FrameWork"/>
                            <SmallTile text=".Net Core"/>
                            <SmallTile text="MVC Architecture"/>
                            <SmallTile text="Node JS"/>
                            <SmallTile text="WPF"/>
                            <SmallTile text="XAML"/>
                            <SmallTile text="SQL"/>
                            <SmallTile text="SQL Server Agent"/>
                        </div>
                        <h2>Tools</h2>
                        <div className="flex-row flex-wrap">
                            <SmallTile text="Git"/>
                            <SmallTile text="TFS"/>
                            <SmallTile text="Team City"/>
                            <SmallTile text="Visual Studio"/>
                            <SmallTile text="Rider"/>
                            <SmallTile text="Q-GIS"/>
                            <SmallTile text="Agile"/>
                        </div>
                        <h2>Qualifications</h2>
                        <h3>BCS Software Development Technician Level 3 with Merit</h3>
                        <p>
                            I started my work at Metricell as an apprentice, to this end I took courses provided by QA
                            and earned a Level 3 BCS Software Development Technician qualification with a merit.
                        </p>
                        <h3>Duke of Edinburgh Awards, Bronze & Silver</h3>

                        <h2>Education</h2>
                        <h3>Reigate College</h3>
                        AS Levels
                        <ul>
                            <li>Computer Science</li>
                            <li>Physics</li>
                            <li>Maths</li>
                        </ul>
                        <h3>Aschcombe School</h3>
                        GSCEs
                        <ul>
                            <li>Maths</li>
                            <li>Double Science</li>
                            <li>Computer Science</li>
                        </ul>
                    </div>
                    <div className="resume-horizontal-divider"/>
                    <div className="resume-right-column">
                        <h3>Info</h3>
                        <h4>Email</h4>
                        <a href={`mailto:${window.variables.emailAddress}`}>
                            <span>{`${window.variables.emailAddress}`}</span>
                        </a>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/oliver-mcmillan/" target="_blank">
                            <span>Oliver McMillan</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}