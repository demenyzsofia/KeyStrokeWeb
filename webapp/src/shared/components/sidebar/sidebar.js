import { useGlobalState } from "../../..";
import { DATASET } from "../../constants/datasets";
import "./sidebar.css"
import React, { useState } from 'react';



const DatasetsSidebar = () => {
    const [active, setActive] =  useGlobalState('dataset');
    
    
    return <div className="sidebar">
            <h2>Adathalmazok</h2>
            <a className={active === DATASET.SAPIPIN && "selected"} onClick={() => setActive(DATASET.SAPIPIN)}  >sapipin</a>
            <a className={active === DATASET.EASY && "selected"} onClick={() => setActive(DATASET.EASY)}>easy</a>
            <a className={active === DATASET.KEYSTROKE2014 && "selected"} onClick={() => setActive(DATASET.KEYSTROKE2014)}>keystroke2014</a>
            <a className={active === DATASET.LOGICALSTRONG && "selected"} onClick={() => setActive(DATASET.LOGICALSTRONG)}>logicalstrong</a>
            <a className={active === DATASET.STRONG && "selected"} onClick={() => setActive(DATASET.STRONG)}>strong</a>
     

        </div>        
}
    


export default DatasetsSidebar;
