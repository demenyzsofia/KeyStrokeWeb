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
              <li onClick={() => setActive(DETECTOR.PCA)}>PCA</li>
              <li onClick={() => setActive(DETECTOR.OCSVM)}>OCSVM</li>
            </ul>
            <h4>{t("detectorGroups.outlierEnsembles")}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.IFOREST)}>IForest</li>
              <li onClick={() => setActive(DETECTOR.FB)}>FB</li>
            </ul>
            <h4>{t("detectorGroups.probabilistic")}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.ABOD)}>ABOD</li>
              <li onClick={() => setActive(DETECTOR.COPOD)}>COPOD</li>
            </ul>
          <h4>{t("detectorGroups.proximityBased")}</h4>
            <ul>
              <li onClick={() => setActive(DETECTOR.LOF)}>LOF</li>
              <li onClick={() => setActive(DETECTOR.KNN)}>kNN</li>
              <li onClick={() => setActive(DETECTOR.HBOS)}>HBOS</li>
            </ul>
            </div>
        </div>
}

export default DetectorSidebar;
