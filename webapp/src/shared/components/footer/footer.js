import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import i18n from "../../../translations/i18n";
import "./footer.css"

const Footer = (parameter) => {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('lng') != null ? localStorage.getItem('lng') : 'hu');
    }, []);

    return <div class="footer">
            <p><i>{t("shared.footer.title")}</i></p>
            {(parameter.parameter)}
        </div>
}


export default Footer;