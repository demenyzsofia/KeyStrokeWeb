import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import keystroke from "../../images/keystroke.png"
import box from "../../images/box.png"
import './basic-concepts.css'
import i18n from "../../translations/i18n";

const BasicConcepts = () => {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem('lng') != null ? localStorage.getItem('lng') : 'hu');
    }, []);
    return <div className="content">
            <h2 id="basic">{t('pages.basic-concepts.title')}</h2>
            <p className='subtitle'><b>{t('pages.basic-concepts.subtitle1')}</b></p>
            <ul className='concepts'>
                <li>{t('pages.basic-concepts.listing1.anomalyDetection')}</li>
                <li>{t('pages.basic-concepts.listing1.class')}</li>
                <li>{t('pages.basic-concepts.listing1.tp')}</li>
                <li>{t('pages.basic-concepts.listing1.fn')}</li>
                <li>{t('pages.basic-concepts.listing1.fp')}</li>
                <li>{t('pages.basic-concepts.listing1.tn')}</li>
                <li>{t('pages.basic-concepts.listing1.precision')}</li>
                <li>{t('pages.basic-concepts.listing1.hist')}</li>
                {/* <img id="keystroke" src={box} /> */}
                <li>{t('pages.basic-concepts.listing1.box')}</li>
            </ul>
            <p className='subtitle'><b>{t('pages.basic-concepts.subtitle2')}</b></p>
            <ul className='notation'>
                <img id="keystroke" src={keystroke} />

                <li>{t('pages.basic-concepts.listing2.ht')}</li>
                <li>{t('pages.basic-concepts.listing2.dd')}</li>
                <li>{t('pages.basic-concepts.listing2.ud')}</li>
                <li>{t('pages.basic-concepts.listing2.auc')}</li>
                <li>{t('pages.basic-concepts.listing2.eer')}</li>
                <li>{t('pages.basic-concepts.listing2.tpr')}</li>
                <li>{t('pages.basic-concepts.listing2.fpr')}</li>
                <li>{t('pages.basic-concepts.listing2.fnr')}</li>
                <li>{t('pages.basic-concepts.listing2.tnr')}</li>
            </ul>
        
        </div>
}
export default BasicConcepts;