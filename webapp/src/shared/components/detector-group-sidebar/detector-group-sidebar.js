import React from 'react';
import { DETECTORGROUP } from '../../constants/detector-groups';
import "./detector-group-sidebar.css"


const DetectorGroupSidebar = () => {
    return <div className="detectorGroupSidebar">
            <h2 id="detectorGroupTitle">Detektor kategóriák</h2>
            <a>{DETECTORGROUP.LINEAR}</a>
            <a>{DETECTORGROUP.PROXIMITY}</a>
            <a>{DETECTORGROUP.ENSEMBLE}</a>
            <a>{DETECTORGROUP.PROBABILISTIC}</a>
        </div>
}

export default DetectorGroupSidebar;