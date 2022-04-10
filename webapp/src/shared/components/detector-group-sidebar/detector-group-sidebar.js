import React from 'react';
import { useGlobalState } from '../../..';
import { DETECTORCATEGORY, DETECTORGROUP } from '../../constants/detector-groups';
import "./detector-group-sidebar.css"


const DetectorGroupSidebar = () => {
    const [active, setActive] =  useGlobalState('detectorGroup');

    return <div className="detectorGroupSidebar">
            <h2 id="detectorGroupTitle">Detektor kategóriák</h2>
            <a onClick={() => setActive(DETECTORCATEGORY.LINEAR)}>{DETECTORGROUP.LINEAR}</a>
            <a onClick={() => setActive(DETECTORCATEGORY.ENSEMBLE)}>{DETECTORGROUP.ENSEMBLE}</a>
            <a onClick={() => setActive(DETECTORCATEGORY.PROBABILISTIC)}>{DETECTORGROUP.PROBABILISTIC}</a>
            <a onClick={() => setActive(DETECTORCATEGORY.PROXIMITY)}>{DETECTORGROUP.PROXIMITY}</a>
        </div>
}

export default DetectorGroupSidebar;