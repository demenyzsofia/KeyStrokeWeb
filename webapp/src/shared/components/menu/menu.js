import keyboard from "../../../images/keyboard.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import "./menu.css"

const Menu = () => {
    const { t } = useTranslation(); 

    return <div className="navigation">               
                <ul id="menu">
                    <li>
                    <img  src={keyboard} />
                    </li>
                    <li>
                        <a href="/">{t("shared.menu.listing.home")}</a>
                    </li>
                    <li>
                        <a href="/datasets">{t("shared.menu.listing.datasets")}</a>
                    </li>
                    <li>
                        <a href="/basic-concepts">{t("shared.menu.listing.basicConcepts")}</a>
                    </li>
                    <li>
                        <a href="/data-analysis">{t("shared.menu.listing.dataAnalysis")}</a>
                    </li>
                    <li className="group">
                        <a>{t("shared.menu.listing.performanceAnalysis")} </a>
                        <ul  className='dropdown'>
                            <li><a  href="/performance-analysis-detectorGroup">{t("shared.menu.submenu.detectorgroup")}</a></li>
                            <li><a href="/performance-analysis-detector">{t("shared.menu.submenu.detector")}</a></li>
                        </ul>
                        <ArrowDropDownIcon/>
                    </li>
                    
                </ul>
            </div>
}


export default Menu;