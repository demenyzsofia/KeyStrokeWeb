import { useGlobalState } from "../../..";
import { DATASET } from "../../constants/datasets";
import "./sidebar.css"
import React, { useState } from 'react';



const DatasetsSidebar = () => {
    const [active, setActive] =  useGlobalState('dataset');
    const [bg, changeBGColor] = useState(1);
    
    
    return <div className="sidebar">
            <h2>Adathalmazok</h2>
            <a onClick={() => {setActive(DATASET.SAPIPIN); changeBGColor(1);}} style={{
                    backgroundColor: bg === 1 ? "#bababa" : "white",              
            }}>sapipin</a>
            <a onClick={() => {setActive(DATASET.EASY);changeBGColor(2) }} style={{
                    backgroundColor: bg === 2 ? "#bababa" : "white"
            }}>easy</a>
            <a onClick={() => {setActive(DATASET.KEYSTROKE2014);changeBGColor(3) }} style={{
                    backgroundColor: bg === 3 ? "#bababa" : "white"
            }}>keystroke2014</a>
            <a onClick={() => {setActive(DATASET.LOGICALSTRONG);changeBGColor(4) }} style={{
                    backgroundColor: bg === 4 ? "#bababa" : "white"
            }}>logicalstrong</a>
            <a onClick={() => {setActive(DATASET.STRONG); changeBGColor(5) }} style={{
                    backgroundColor: bg === 5 ? "#bababa" : "white"
            }}>strong</a>
     

        </div>        
}
    


export default DatasetsSidebar;
