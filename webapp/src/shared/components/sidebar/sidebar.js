import { useGlobalState } from "../../..";
import { DATASET } from "../../constants/datasets";
import "./sidebar.css"

const DatasetsSidebar = () => {
    const [active, setActive] =  useGlobalState('dataset');
   
    return <div className="sidebar">
            <h2>Adathalmazok</h2>
            <a onClick={() => setActive(DATASET.SAPIPIN)}>sapipin</a>
            <a onClick={() => setActive(DATASET.EASY)}>easy</a>
            <a onClick={() => setActive(DATASET.KEYSTROKE2014)}>keystroke2014</a>
            <a onClick={() => setActive(DATASET.LOGICALSTRONG)}>logicalstrong</a>
            <a onClick={() => setActive(DATASET.STRONG)}>strong</a>
        </div>        
}


export default DatasetsSidebar;
