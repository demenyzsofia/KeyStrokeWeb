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
            <ul>
              <li className={active === DETECTOR.PCA && "selected"} onClick={() => setActive(DETECTOR.PCA)}>PCA</li>
              <li className={active === DETECTOR.OCSVM && "selected"} onClick={() => setActive(DETECTOR.OCSVM)}>OCSVM</li>
            </ul>
            <h4>{t("detectorGroups.outlierEnsembles")}</h4>
            <ul>
              <li className={active === DETECTOR.IFOREST && "selected"}  onClick={() => setActive(DETECTOR.IFOREST)}>IForest</li>
              <li className={active === DETECTOR.FB && "selected"} onClick={() => setActive(DETECTOR.FB)}>FB</li>
            </ul>
            <h4>{t("detectorGroups.probabilistic")}</h4>
            <ul>
              <li className={active === DETECTOR.ABOD && "selected"} onClick={() => setActive(DETECTOR.ABOD)}>ABOD</li>
              <li className={active === DETECTOR.COPOD && "selected"} onClick={() => setActive(DETECTOR.COPOD)}>COPOD</li>
            </ul>
          <h4>{t("detectorGroups.proximityBased")}</h4>
            <ul>
              <li className={active === DETECTOR.LOF && "selected"} onClick={() => setActive(DETECTOR.LOF)}>LOF</li>
              <li className={active === DETECTOR.KNN && "selected"} onClick={() => setActive(DETECTOR.KNN)}>kNN</li>
              <li className={active === DETECTOR.HBOS && "selected"} onClick={() => setActive(DETECTOR.HBOS)}>HBOS</li>
            </ul>
            </div>
        </div>
}

export default DetectorSidebar;
