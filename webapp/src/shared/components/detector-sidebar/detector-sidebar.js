import React from 'react';
import { useGlobalState } from '../../..';
import { DETECTORGROUP } from '../../constants/detector-groups';
import { DETECTOR } from '../../constants/detectors';
import Accordion from './according/Accordion';
import './detector-sidebar.css'


const DetectorSidebar = () => {
  const [active, setActive] =  useGlobalState('detector');


    return <div className="detectorsSidebar">
          <h2 id="detectors">Detektorok</h2>
          {/* <Accordion className="accordion"></Accordion> */}
          <div className="detectorSidebar">
            <h4>{DETECTORGROUP.LINEAR}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.PCA)}>PCA</li>
              <li onClick={() => setActive(DETECTOR.OCSVM)}>OCSVM</li>
            </ul>
            <h4>{DETECTORGROUP.ENSEMBLE}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.IFOREST)}>IForest</li>
              <li onClick={() => setActive(DETECTOR.FB)}>FB</li>
            </ul>
            <h4>{DETECTORGROUP.PROBABILISTIC}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.ABOD)}>ABOD</li>
              <li onClick={() => setActive(DETECTOR.COPOD)}>COPOD</li>
            </ul>
          <h4>{DETECTORGROUP.PROXIMITY}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.LOF)}>LOF</li>
              <li onClick={() => setActive(DETECTOR.KNN)}>kNN</li>
              <li onClick={() => setActive(DETECTOR.HBOS)}>HBOS</li>
            </ul>
            </div>
            {/* <a onClick={() => setActive(DETECTORCATEGORY.ENSEMBLE)}>{}</a>
            <a onClick={() => setActive(DETECTORCATEGORY.)}>{DETECTORGROUP.PROBABILISTIC}</a>
            <a onClick={() => setActive()}>{DETECTORGROUP.PROXIMITY}</a> */}
        </div>
}

export default DetectorSidebar;
