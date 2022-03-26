import keyboard from "../../../images/keyboard.png"
import "./menu.css"

const Menu = () => {
    return <div className="navigation">               
                <ul>
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
                    <li>
                        <a href="/python-basics">Python alapok</a>
                    </li>
                    <li>
                        <a href="/data-analysis">Adatelemzés</a>
                    </li>
                    <li>
                        <a href="/performance-analysis">Teljesítményelemzés</a>
                    </li>
                </ul>
            </div>
}


export default Menu;