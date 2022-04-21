import React from 'react';
import { useGlobalState } from '../../..';
import { DIAGRAMTYPE } from '../../constants/diagram-types';
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import "./data-sidebar.css"

const DataSidebar = () => {
    const { t } = useTranslation(); 
    const [active, setActive] =  useGlobalState('diagramType');

    return <div className="dataSidebar">
                <h2 id="radioTitle">Diagramok</h2>
                <div className="radioGroup">
                    <label>
                    <input type="radio" className="radio" value="hist" name="hist" checked={active==DIAGRAMTYPE.HIST} onClick={() => setActive(DIAGRAMTYPE.HIST)}/> 
                        {t("shared.datasidebar.hist")}
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" className="radio" value="line" name="line" checked={active==DIAGRAMTYPE.LINE} onClick={() => setActive(DIAGRAMTYPE.LINE)} />
                    {t("shared.datasidebar.typing")}
                    </label>
                </div>
            </div>
}

export default DataSidebar;
