
import React,{useState} from "react";
import logo from "../../../images/logo.png"
import hungarian from "../../../images/hungarian.png"
import unitedKingdom from "../../../images/united-kingdom.png"
import { useTranslation } from "react-i18next";
import "./header.css"
import i18n from 'i18next';


const Header = ({title}) => {
    const {t} = useTranslation();
    

    return <div className="header">
        <img className="logo" src={logo} />
        <p><i>{title || t("shared.header.title")}</i></p>
        <div className="flags">
            <img src={hungarian} onClick={()=> i18n.changeLanguage('hu')}/>
            <img src={unitedKingdom} onClick={()=> i18n.changeLanguage('en')}/>
        </div>
    </div>
}


export default Header;