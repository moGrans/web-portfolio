import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressMeService = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>

            <div className="single-progress">
                <h6 className="title">Flask</h6>
                <ProgressBar now={80} />
                <span className="label">80%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">MongoDB</h6>
                <ProgressBar now={80} />
                <span className="label">80%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">PostgreSQL</h6>
                <ProgressBar now={75} />
                <span className="label">75%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Docker</h6>
                <ProgressBar now={73} />
                <span className="label">73%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">AWS</h6>
                <ProgressBar now={70} />
                <span className="label">70%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Angular</h6>
                <ProgressBar now={70} />
                <span className="label">70%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">React</h6>
                <ProgressBar now={65} />
                <span className="label">65%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressMeService
