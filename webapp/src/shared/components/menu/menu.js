import keyboard from "../../../images/keyboard.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./menu.css"

const Menu = () => {
    return <div className="navigation">               
                <ul id="menu">
                    <li>
                    <img  src={keyboard} />
                    </li>
                    <li>
                        <a href="/">Főoldal</a>
                    </li>
                    <li>
                        <a href="/datasets">Adathalmazok</a>
                    </li>
                    <li>
                        <a href="/basic-concepts">Alapfogalmak</a>
                    </li>
                    {/* <li>
                        <a href="/python-basics">Python alapok</a>
                    </li> */}
                    <li>
                        <a href="/data-analysis">Adatelemzés</a>
                    </li>
                    <li className="group">
                        <a  href="/performance-analysis">Teljesítményelemzés </a>
                        <ul  className='dropdown'>
                            <li><a href="#">Detegtorkategóriák</a></li>
                            <li><a href="#">Detektorok</a></li>
                        </ul>
                        <ArrowDropDownIcon/>
                    </li>
                    
                </ul>
            </div>
}


export default Menu;