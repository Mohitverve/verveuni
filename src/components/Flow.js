import React from 'react'
import '../styles/verve.css'

const Flow = () => {
  return (
    <div>
       <div className="flow-container hidden">
                <h2 className="flow-title">Flow of our Services:</h2>
                <div className="flow-steps">
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-clipboard-list"></i>
                        </div>
                        <h3 className="step-title">Intrigued by VR Integration for Educational Purposes</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <h3 className="step-title">Form Completed for Session</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h3 className="step-title">Session Arranged</h3>
                    </div>
                    <div className="flow-step">
                        <div className="step-icon">
                            <i className="fas fa-vr-cardboard"></i>
                        </div>
                        <h3 className="step-title">VR Headset & Assortment of Content Provided</h3>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Flow
