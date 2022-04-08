import "./sidebar.css"

import { useGlobalState } from "../../..";
import { DATASET } from "../../constants/datasets";
import { useState } from "react";



const MainContent = () => {
    const [active, setActive] =  useGlobalState('dataset');
    const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    //console.log("you just clicked");
  
    setStyle("cont2");
  };
    return <div className="sidebar">
            <h2>Adathalmazok</h2>
           
            <a onClick={() => setActive(DATASET.SAPIPIN)}>sapipin</a>
            <a onClick={() => setActive(DATASET.EASY)}>easy</a>
            <a onClick={() => setActive(DATASET.KEYSTROKE2014)}>keystroke2014</a>
            <a onClick={() => setActive(DATASET.LOGICALSTRONG)}>logicalstrong</a>
            <a onClick={() => setActive(DATASET.STRONG)}>strong</a>
        </div>        
}


export default MainContent;
