
import React, { useState, useEffect } from "react";
import logo from "../../../images/logo.png"
import hungarian from "../../../images/hungarian.png"
import unitedKingdom from "../../../images/united-kingdom.png"
import { useTranslation } from "react-i18next";
import "./header.css"


const Header = ({ title }) => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('hu');

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('lng') != null ? localStorage.getItem('lng') : 'hu');
    }, []);

    return <div className="header">
        <img className="logo" src={logo} />
        <p><i>{title || t("shared.header.title")}</i></p>
        <div className="flags">
            {/* <img src={hungarian} onClick={()=> i18n.changeLanguage('hu')}/>
            <img src={unitedKingdom} onClick={()=> i18n.changeLanguage('en')}/> */}
            <img src={hungarian} onClick={() => { localStorage.setItem('lng', 'hu'); i18n.changeLanguage('hu') }} />
            <img src={unitedKingdom} onClick={ () => { localStorage.setItem('lng', 'en'); i18n.changeLanguage('en') }} />
        </div>
    </div>
}


export default Header;