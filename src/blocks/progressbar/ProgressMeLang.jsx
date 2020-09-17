import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressMeLang = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress">
                <h6 className="title">Python</h6>
                <ProgressBar now={90} />
                <span className="label">90%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Java</h6>
                <ProgressBar now={83} />
                <span className="label">83%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">C</h6>
                <ProgressBar now={80} />
                <span className="label">80%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">Lua</h6>
                <ProgressBar now={80} />
                <span className="label">80%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">C++</h6>
                <ProgressBar now={78} />
                <span className="label">78%</span>
            </div>

            <div className="single-progress">
                <h6 className="title">JavaScript</h6>
                <ProgressBar now={72} />
                <span className="label">72%</span>
            </div>
            
            <div className="single-progress">
                <h6 className="title">TypeScript</h6>
                <ProgressBar now={72} />
                <span className="label">72%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressMeLang
