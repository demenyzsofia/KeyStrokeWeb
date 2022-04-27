import React from 'react';
import { useGlobalState } from '../../..';
import { DETECTORCATEGORY } from '../../constants/detector-groups';
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import "./detector-group-sidebar.css"


const DetectorGroupSidebar = () => {
    const { t } = useTranslation(); 
    const [active, setActive] =  useGlobalState('detectorGroup');

    return <div className="detectorGroupSidebar">
            <h2 id="detectorGroupTitle">Detektor kategóriák</h2>
            <a className={active === DETECTORCATEGORY.LINEAR && "selected"}  onClick={() => setActive(DETECTORCATEGORY.LINEAR)}>{t("detectorGroups.linear")}</a>
            <a className={active === DETECTORCATEGORY.ENSEMBLE && "selected"} onClick={() => setActive(DETECTORCATEGORY.ENSEMBLE)}>{t("detectorGroups.outlierEnsembles")}</a>
            <a className={active === DETECTORCATEGORY.PROBABILISTIC && "selected"} onClick={() => setActive(DETECTORCATEGORY.PROBABILISTIC)}>{t("detectorGroups.probabilistic")}</a>
            <a className={active === DETECTORCATEGORY.PROXIMITY && "selected"} onClick={() => setActive(DETECTORCATEGORY.PROXIMITY)}>{t("detectorGroups.proximityBased")}</a>
        </div>
}

export default DetectorGroupSidebar;