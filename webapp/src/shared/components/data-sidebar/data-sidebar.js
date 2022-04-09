import React from 'react';
import { useGlobalState } from '../../..';
import { DIAGRAMTYPE } from '../../constants/diagram-types';
import "./data-sidebar.css"

const DataSidebar = () => {
    const [active, setActive] =  useGlobalState('diagramType');
    return <div className="dataSidebar">
                <h2 id="radioTitle">Diagramok</h2>
                <div className="radioGroup">
                    <label>
                    <input type="radio" className="radio" value="hist" name="hist" checked={active==DIAGRAMTYPE.HIST} onClick={() => setActive(DIAGRAMTYPE.HIST)}/> 
                        Hisztogramok
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" className="radio" value="line" name="line" checked={active==DIAGRAMTYPE.LINE} onClick={() => setActive(DIAGRAMTYPE.LINE)} />
                        Gépelési ritmusok
                    </label>
                </div>
            </div>
}

export default DataSidebar;
