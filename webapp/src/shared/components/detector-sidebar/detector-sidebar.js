import React from 'react';
import Accordion from './according/Accordion';


const DetectorSidebar = () => {
    return <div className="getectorSidebar">
          <h2 id="detectorG">Detektor kategóriák</h2>
          <Accordion className="accordion"></Accordion>
        </div>
}

export default DetectorSidebar;
