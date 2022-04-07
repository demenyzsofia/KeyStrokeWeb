import React from 'react';
import { useGlobalState } from '../sidebar/sidebar';
import "./data-sidebar.css"

const DataSidebar = () => {
    const [active, setActive] =  useGlobalState('plot');
    return <div className="dataSidebar">
                <h2 id="radioTitle">Megtekinthető diagramok</h2>
                <div className="radioGroup">
                    <label>
                    <input type="radio" className="radio" value="hist" name="hist" checked={active=='hist'} onClick={() => setActive('hist')}/> 
                        Jellemzők hisztogramjai
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" className="radio" value="line" name="line" checked={active=='line'} onClick={() => setActive('line')} />
                        Felhasználók gépelési ritmusai
                    </label>
                </div>
            </div>
}

export default DataSidebar;
