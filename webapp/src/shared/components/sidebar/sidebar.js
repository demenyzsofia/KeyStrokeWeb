import "./sidebar.css"
import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  plot: 'hist',
  dataset : 'sapipin'
};
const { useGlobalState } = createGlobalState(initialState);

const MainContent = () => {
    const [active, setActive] =  useGlobalState('dataset');
    return <div className="sidebar">
            <h2>Adathalmazok</h2>
            <a className="active" href="#pin.csv" onClick={() => setActive('sapipin')}>sapipin</a>
            <a href="#about" onClick={() => setActive('easy')}>easy</a>
            <a href="#news" onClick={() => setActive('keystroke2014')}>keystroke2014</a>
            <a href="#contact" onClick={() => setActive('logicalstrong')}>logicalstrong</a>
            <a href="#about" onClick={() => setActive('strong')}>strong</a>
        </div>        
}


export default MainContent;
export {useGlobalState};