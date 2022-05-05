import React from 'react';
import { useGlobalState } from '../../..';
import { DETECTOR } from '../../constants/detectors';
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import './detector-sidebar.css'


const DetectorSidebar = () => {
  const { t } = useTranslation(); 
  const [active, setActive] =  useGlobalState('detector');

  return <div className="detectorsSidebar">
          <h2 id="detectors">Detektorok</h2>
          <div className="detectorSidebar">
            <h4>{t("detectorGroups.linear")}</h4>
             <div className='group'>
              <a className={active === DETECTOR.PCA && "selected"} onClick={() => setActive(DETECTOR.PCA)}>PCA</a>
              <a className={active === DETECTOR.OCSVM && "selected"} onClick={() => setActive(DETECTOR.OCSVM)}>OCSVM</a>
            </div>
            <h4>{t("detectorGroups.outlierEnsembles")}</h4>
            <div  className='group'>
              <a className={active === DETECTOR.IFOREST && "selected"}  onClick={() => setActive(DETECTOR.IFOREST)}>IForest</a>
              <a className={active === DETECTOR.FB && "selected"} onClick={() => setActive(DETECTOR.FB)}>FB</a>
            </div>
            <h4>{t("detectorGroups.probabilistic")}</h4>
            <div  className='group'>
              <a className={active === DETECTOR.ABOD && "selected"} onClick={() => setActive(DETECTOR.ABOD)}>ABOD</a>
              <a className={active === DETECTOR.COPOD && "selected"} onClick={() => setActive(DETECTOR.COPOD)}>COPOD</a>
            </div>
          <h4>{t("detectorGroups.proximityBased")}</h4>
            <div  className='group'>
              <a className={active === DETECTOR.LOF && "selected"} onClick={() => setActive(DETECTOR.LOF)}>LOF</a>
              <a className={active === DETECTOR.KNN && "selected"} onClick={() => setActive(DETECTOR.KNN)}>kNN</a>
              <a className={active === DETECTOR.HBOS && "selected"} onClick={() => setActive(DETECTOR.HBOS)}>HBOS</a>
            </div>
            </div>
        </div>
}

export default DetectorSidebar;
